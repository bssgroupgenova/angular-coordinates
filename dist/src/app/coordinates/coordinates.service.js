import { Direction } from './direction.enum';
import { TransformationType } from './transformation-type.enum';
export class CoordinatesService {
    transform(value, transformationType, direction) {
        if (!transformationType || !this.isValueValid(value, direction)) {
            return '';
        }
        else if (transformationType === TransformationType.ToDegrees) {
            return this.transformToDegrees(value, direction);
        }
        else {
            return this.transformToDigit(value);
        }
    }
    isValueValid(value, direction) {
        return (!value && value === 0) || this.isValidDigit(value, direction) || this.isValidDegree(value);
    }
    transformToDigit(value) {
        const potentialNumber = Number(value);
        if (!Number.isNaN(potentialNumber)) {
            return potentialNumber;
        }
        return this.transformDegreesToNumber(value);
    }
    transformToDegrees(value, direction) {
        if (typeof value === 'string' && Number.isNaN(Number(value))) {
            return value;
        }
        else {
            const numberValue = Number(value);
            return this.transformNumberToDegrees(numberValue) +
                (direction ? ` ${this.resolveDirection(numberValue, direction)}` : '');
        }
    }
    /* tslint:disable:cyclomatic-complexity */
    isValidDegree(value, direction) {
        // All non-strings are for sure not valid degrees.
        if (typeof value !== 'string' || !this.isValidDegreeFormat(value)) {
            return false;
        }
        const values = this.extractValuesFromDegrees(value);
        // Minutes and seconds can't exceed [0,60) boundaries.
        const inBoundary = (val) => val >= 0 && val < 60;
        if (!inBoundary(values[1]) || !inBoundary(values[2])) {
            return false;
        }
        // Depending on the direction (or lack thereof), the main value can't exceed it's boundaries.
        const boundaries = this.getDirectionBoundaries(direction);
        const digitValue = this.sumDegreeValues(values);
        return !(digitValue < boundaries[0] || digitValue > boundaries[1]);
    }
    /* tslint:enable */
    /* tslint:disable:cyclomatic-complexity */
    isValidDigit(value, direction) {
        let val;
        if (typeof value === 'number' && !Number.isNaN(value)) {
            val = value;
        }
        else if (typeof value === 'string') {
            val = Number(value);
            if (Number.isNaN(val)) {
                return false;
            }
        }
        else {
            return false;
        }
        const boundaries = this.getDirectionBoundaries(direction);
        return !(value < boundaries[0] || value > boundaries[1]);
    }
    /* tslint:enable */
    isValidDegreeFormat(value) {
        return /^\d+°(\d+'(\d+")?)?(\s[NSWE])?$/.test(value);
    }
    transformNumberToDegrees(value) {
        const absoluteDegrees = Math.abs(Number(value));
        let fullDegrees = Math.floor(absoluteDegrees);
        const remainingMinutes = (absoluteDegrees - fullDegrees) * 60;
        let minutes = Math.floor(remainingMinutes);
        const remainingSeconds = (remainingMinutes - minutes) * 60;
        let seconds = Math.round(remainingSeconds);
        if (seconds === 60) {
            minutes += 1;
            seconds = 0;
        }
        if (minutes === 60) {
            fullDegrees += 1;
            minutes = 0;
        }
        return (`${fullDegrees}°${minutes}'${seconds}"`);
    }
    transformDegreesToNumber(value) {
        return this.sumDegreeValues(this.extractValuesFromDegrees(value)) * (this.isMinusHemisphere(value) ? -1 : 1);
    }
    isMinusHemisphere(value) {
        return /[SW]$/.test(value);
    }
    sumDegreeValues(values) {
        return values[0] + values[1] / 60 + values[2] / (60 * 60);
    }
    resolveDirection(degrees, direction) {
        if (direction === Direction.Latitude) {
            return degrees < 0 ? 'S' : 'N';
        }
        else {
            return degrees < 0 ? 'W' : 'E';
        }
    }
    extractValuesFromDegrees(value) {
        const values = value.split(/\D/).filter(part => Boolean(part)).map(v => Number(v));
        return values.concat(Array(3 - values.length).fill(0));
    }
    getDirectionBoundaries(direction) {
        return !direction || direction === Direction.Longitude ? [-180, 180] : [-90, 90];
    }
}
//# sourceMappingURL=coordinates.service.js.map
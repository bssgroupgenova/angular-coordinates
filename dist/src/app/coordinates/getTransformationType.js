import { TransformationType } from './transformation-type.enum';
export const getValidTransformationType = (type) => {
    if (!type || (type !== TransformationType.ToDegrees && type !== TransformationType.ToDigit)) {
        return TransformationType.ToDegrees;
    }
    else {
        return type;
    }
};
//# sourceMappingURL=getTransformationType.js.map
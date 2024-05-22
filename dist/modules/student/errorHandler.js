"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (data, schema) => {
    const { error } = schema.validate(data);
    if (error)
        return { error };
    return { error: null };
};
exports.validateRequest = validateRequest;

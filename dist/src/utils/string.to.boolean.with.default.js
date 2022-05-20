"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envToBooleanWIthDefault = void 0;
function envToBooleanWIthDefault(env, defaultValue) {
    const value = process.env[env];
    if (!value)
        return defaultValue;
    return value === "true" ? true : false;
}
exports.envToBooleanWIthDefault = envToBooleanWIthDefault;
//# sourceMappingURL=string.to.boolean.with.default.js.map
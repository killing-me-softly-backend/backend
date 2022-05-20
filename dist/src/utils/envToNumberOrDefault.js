"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envToNumberOrDefault = void 0;
function envToNumberOrDefault(env, defaultValue) {
    const value = process.env[env];
    if (!value)
        return defaultValue;
    const valueNumber = parseInt(value);
    return valueNumber;
}
exports.envToNumberOrDefault = envToNumberOrDefault;
//# sourceMappingURL=envToNumberOrDefault.js.map
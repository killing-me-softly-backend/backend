"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envToStringOrDefault = void 0;
function envToStringOrDefault(env, defaultValue) {
    const value = process.env[env];
    if (!value)
        return defaultValue;
    return value;
}
exports.envToStringOrDefault = envToStringOrDefault;
//# sourceMappingURL=envToStringOrDefault.js.map
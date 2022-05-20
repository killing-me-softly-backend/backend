"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfTooComplex = void 0;
const graphql_1 = require("graphql");
const graphql_fields_list_1 = require("graphql-fields-list");
const _ = __importStar(require("lodash"));
function throwIfTooComplex(info, path) {
    const fm = (0, graphql_fields_list_1.fieldsMap)(info);
    const res = _.get(fm, path);
    if (res)
        throw new graphql_1.GraphQLError(`Query is too complex`);
}
exports.throwIfTooComplex = throwIfTooComplex;
//# sourceMappingURL=is.too.complex.query.js.map
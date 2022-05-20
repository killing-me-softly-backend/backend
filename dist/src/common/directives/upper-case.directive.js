"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperCaseDirective = void 0;
const utils_1 = require("@graphql-tools/utils");
const graphql_1 = require("graphql");
class UpperCaseDirective extends utils_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === "string") {
                return result.toUpperCase();
            }
            return result;
        };
    }
}
exports.UpperCaseDirective = UpperCaseDirective;
//# sourceMappingURL=upper-case.directive.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowPartialDelete = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const string_to_boolean_with_default_1 = require("../../utils/string.to.boolean.with.default");
exports.AllowPartialDelete = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const req = graphql_1.GqlExecutionContext.create(ctx).getContext().req;
    const allow_partial_delete = (0, string_to_boolean_with_default_1.envToBooleanWIthDefault)((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.allow_partial_delete, false);
    return allow_partial_delete;
});
//# sourceMappingURL=allow.partial.delete.decorator.js.map
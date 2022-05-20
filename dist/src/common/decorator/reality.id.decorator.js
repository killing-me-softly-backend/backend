"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealityId = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
exports.RealityId = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const req = graphql_1.GqlExecutionContext.create(ctx).getContext().req;
    const realityId = String((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.reality_id);
    if (!realityId)
        throw new graphql_2.GraphQLError("reality id header is missing");
    return realityId;
});
//# sourceMappingURL=reality.id.decorator.js.map
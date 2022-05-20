"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlExtractOperationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
let GraphqlExtractOperationMiddleware = class GraphqlExtractOperationMiddleware {
    constructor(logger) {
        this.logger = logger;
    }
    use(req, res, next) {
        var _a, _b, _c;
        const operationName = (_a = req.body) === null || _a === void 0 ? void 0 : _a.operationName;
        const query = ((_b = req.body) === null || _b === void 0 ? void 0 : _b.query) || ((_c = req.query) === null || _c === void 0 ? void 0 : _c.query);
        if (!query)
            return next();
        const isMutation = query.indexOf(`mutation ${operationName}`) !== -1;
        const isQuery = query.indexOf(`query ${operationName}`) !== -1;
        const isSubscription = query.indexOf(`subscription ${operationName}`) !== -1;
        let operationType;
        if (isQuery)
            operationType = "query";
        if (isMutation)
            operationType = "mutation";
        if (isSubscription)
            operationType = "subscription";
        const subOperation = query
            .split(`${operationType} ${operationName}`)[1]
            .trim()
            .split("{")[1]
            .split("(")[0]
            .trim();
        if (operationName && operationType && subOperation) {
            req.graphql = { operationName, operationType, subOperation };
        }
        next();
    }
};
GraphqlExtractOperationMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [Object])
], GraphqlExtractOperationMiddleware);
exports.GraphqlExtractOperationMiddleware = GraphqlExtractOperationMiddleware;
//# sourceMappingURL=graphql-extract-operation-middlewatr.js.map
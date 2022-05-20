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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDurationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const getDurationInMilliseconds_1 = require("./getDurationInMilliseconds");
const _ = __importStar(require("lodash"));
const config_1 = require("../config");
let RequestDurationMiddleware = class RequestDurationMiddleware {
    constructor(logger, configService) {
        this.logger = logger;
        this.configService = configService;
    }
    use(req, res, next) {
        const start = process.hrtime();
        const logger = this.logger;
        const loggerConfig = this.configService.getConfig().logger;
        function logDuration() {
            var _a, _b, _c;
            const durationInMilliseconds = (0, getDurationInMilliseconds_1.getDurationInMilliseconds)(start);
            let operation;
            if (!_.isNil((_a = req === null || req === void 0 ? void 0 : req.graphql) === null || _a === void 0 ? void 0 : _a.subOperation)) {
                if (((_b = req === null || req === void 0 ? void 0 : req.graphql) === null || _b === void 0 ? void 0 : _b.subOperation) === "__schema") {
                    if (loggerConfig.logging.logGraphqlIntrospectionRequests) {
                        operation = "introspection";
                    }
                }
                else {
                    if (loggerConfig.logging.logGraphqlEntitiesRequests) {
                        operation = (_c = req === null || req === void 0 ? void 0 : req.graphql) === null || _c === void 0 ? void 0 : _c.subOperation;
                    }
                }
            }
            else {
                if (loggerConfig.logging.logNonGraphqlRequests) {
                    operation = `${req.url} ${req.method}`;
                }
            }
            if (operation) {
                logger.info(`request for ${operation} took ${durationInMilliseconds}[ms]`);
            }
        }
        res.on("finish", () => {
            logDuration();
        });
        next();
    }
};
RequestDurationMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [Object, config_1.AppConfigService])
], RequestDurationMiddleware);
exports.RequestDurationMiddleware = RequestDurationMiddleware;
//# sourceMappingURL=express-request-duration.js.map
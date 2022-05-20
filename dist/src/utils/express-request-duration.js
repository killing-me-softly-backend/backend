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
exports.RequestDurationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const config_1 = require("../config");
const getDurationInMilliseconds_1 = require("./getDurationInMilliseconds");
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
            const durationInMilliseconds = (0, getDurationInMilliseconds_1.getDurationInMilliseconds)(start);
            let operation;
            logger.info(`method ${req === null || req === void 0 ? void 0 : req.method} endpoint ${req === null || req === void 0 ? void 0 : req.path} took ${durationInMilliseconds}[ms]`);
        }
        res.on('finish', () => {
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
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
exports.DalService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const nest_winston_1 = require("nest-winston");
const nestjs_knex_1 = require("nestjs-knex");
const app_config_service_1 = require("../config/app.config.service");
const knex_logger_1 = require("../utils/knex.logger");
let DalService = class DalService {
    constructor(logger, knex, configService) {
        this.logger = logger;
        this.knex = knex;
        this.configService = configService;
        const config = this.configService.getConfig();
        const kenxLogging = config.kenx.logging;
        (0, knex_logger_1.knexLogger)(this.knex, this.logger, kenxLogging.everySql, kenxLogging.bindings);
    }
};
DalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(1, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Object, Function, app_config_service_1.AppConfigService])
], DalService);
exports.DalService = DalService;
//# sourceMappingURL=dal.service.js.map
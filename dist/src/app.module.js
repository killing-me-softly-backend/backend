"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const nest_winston_1 = require("nest-winston");
const config_1 = require("./config");
const dal_module_1 = require("./dal/dal.module");
const logger_1 = require("./logger");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply((0, express_1.json)()).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.AppConfigModule,
            nest_winston_1.WinstonModule.forRootAsync({
                useFactory: (configService) => {
                    return (0, logger_1.loggerOptionsFactory)(configService.getConfig().logger.level);
                },
                inject: [config_1.AppConfigService],
            }),
            dal_module_1.DalModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
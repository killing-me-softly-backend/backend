"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DalModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const knex_load_config_1 = require("../utils/knex.load.config");
const dal_service_1 = require("./dal.service");
let DalModule = class DalModule {
};
DalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_knex_1.KnexModule.forRootAsync({
                useFactory: () => {
                    return { config: (0, knex_load_config_1.knexLoadConfig)() };
                },
            }),
        ],
        providers: [dal_service_1.DalService],
        exports: [dal_service_1.DalService],
    })
], DalModule);
exports.DalModule = DalModule;
//# sourceMappingURL=dal.module.js.map
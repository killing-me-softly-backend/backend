"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = void 0;
const common_1 = require("@nestjs/common");
const dal_module_1 = require("../../dal/dal.module");
const owners_module_1 = require("../owners/owners.module");
const cat_owner_resolver_1 = require("./cat-owner.resolver");
const cats_resolver_1 = require("./cats.resolver");
const cats_service_1 = require("./cats.service");
let CatsModule = class CatsModule {
};
CatsModule = __decorate([
    (0, common_1.Module)({
        imports: [owners_module_1.OwnersModule, dal_module_1.DalModule],
        providers: [cats_service_1.CatsService, cats_resolver_1.CatsResolver, cat_owner_resolver_1.CatOwnerResolver],
    })
], CatsModule);
exports.CatsModule = CatsModule;
//# sourceMappingURL=cats.module.js.map
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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const dal_service_1 = require("../../dal/dal.service");
let CatsService = class CatsService {
    constructor(logger, dalService) {
        this.logger = logger;
        this.dalService = dalService;
        this.knex = this.dalService.knex;
    }
    async create(cats) {
        return this.knex("cats")
            .insert(cats)
            .onConflict("id")
            .merge()
            .returning("*");
    }
    async findAll() {
        return this.knex.select().table("cats");
    }
    async findOneById(id) {
        return this.knex("cats").where("id", id).first();
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [Object, dal_service_1.DalService])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map
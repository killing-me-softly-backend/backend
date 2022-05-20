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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerService = void 0;
const common_1 = require("@nestjs/common");
const _ = __importStar(require("lodash"));
const dal_service_1 = require("../../dal/dal.service");
const items_service_1 = require("../items/items.service");
const container_dto_converter_1 = require("./container.dto.converter");
let ContainerService = class ContainerService {
    constructor(dalService, itemsService) {
        this.dalService = dalService;
        this.itemsService = itemsService;
    }
    async getByIds(ids) {
        if (_.isEmpty(ids))
            return [];
        try {
            const containerDtos = await this.dalService.knex
                .from("containers")
                .whereIn("id", ids);
            return containerDtos !== null && containerDtos !== void 0 ? containerDtos : [];
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, `error in ContainerService -> findByItemsIds ${error === null || error === void 0 ? void 0 : error.message}`);
        }
    }
    async getByFilter(filter) {
        try {
            const query = this.dalService.knex.from("containers");
            if (filter === null || filter === void 0 ? void 0 : filter.byLocation) {
                query.whereIn("location", filter.byLocation);
            }
            const containerDtos = await query;
            if (_.isNil(containerDtos))
                return [];
            return containerDtos.map((containerDto) => (0, container_dto_converter_1.containerDtoToContainerConverter)(containerDto));
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, `error in ContainerService -> findByItemsIds ${error === null || error === void 0 ? void 0 : error.message}`);
        }
    }
};
ContainerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dal_service_1.DalService,
        items_service_1.ItemsService])
], ContainerService);
exports.ContainerService = ContainerService;
//# sourceMappingURL=containers.service.js.map
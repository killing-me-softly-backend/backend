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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const joi_1 = __importDefault(require("joi"));
const lodash_1 = __importDefault(require("lodash"));
const uuid_1 = require("uuid");
const app_config_service_1 = require("../../config/app.config.service");
const dal_service_1 = require("../../dal/dal.service");
const graphql_2 = require("../../generated/graphql");
const knex_batch_update_1 = require("../../utils/knex.batch.update");
const items_dto_converter_1 = require("./items.dto.converter");
let ItemsService = class ItemsService {
    constructor(dalService, configService) {
        this.dalService = dalService;
        this.configService = configService;
        this.knex = this.dalService.knex;
        this.config = this.configService.getConfig();
    }
    async getItems(filter) {
        const queries = [];
        const entities = [
            { itemType: graphql_2.ItemTypes.Software, fn: () => this.getSoftwareItems(filter) },
            {
                itemType: graphql_2.ItemTypes.OfficeFurniture,
                fn: () => this.getOfficeFurnitureItems(filter),
            },
            {
                itemType: graphql_2.ItemTypes.OfficeEquipment,
                fn: () => this.getOfficeEquipmentItems(filter),
            },
        ];
        entities.forEach((entity) => {
            var _a;
            if (!filter.byEntityType ||
                ((_a = filter.byEntityType) === null || _a === void 0 ? void 0 : _a.includes(entity.itemType))) {
                queries.push(entity.fn());
            }
        });
        try {
            const res = await Promise.all(queries);
            return res.reduce((acc, curr) => {
                acc.push(...curr);
                return acc;
            }, []);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, `error in ItemsService -> findAll ${error === null || error === void 0 ? void 0 : error.message}`);
        }
    }
    async getSoftwareItems(filter) {
        const query = this.knex
            .from("software")
            .innerJoin("items", "software.item_id", "items.id");
        if (filter === null || filter === void 0 ? void 0 : filter.byContainerIds) {
            query.whereIn("items.container_id", filter.byContainerIds);
        }
        if (filter === null || filter === void 0 ? void 0 : filter.byItemIds) {
            query.whereIn("items.id", filter.byItemIds);
        }
        const softwareItemsDtos = await query;
        const softwareItems = softwareItemsDtos.map((dto) => (0, items_dto_converter_1.softwareItemDtoToSoftwareItemConverter)(dto));
        return (softwareItems === null || softwareItems === void 0 ? void 0 : softwareItems.length) > 0 ? softwareItems : [];
    }
    async getOfficeFurnitureItems(filter) {
        const query = this.knex
            .from("office_forniture")
            .innerJoin("items", "office_forniture.item_id", "items.id");
        if (filter === null || filter === void 0 ? void 0 : filter.byContainerIds) {
            query.whereIn("items.container_id", filter.byContainerIds);
        }
        if (filter === null || filter === void 0 ? void 0 : filter.byItemIds) {
            query.whereIn("items.id", filter.byItemIds);
        }
        const officeFurnitureItemDtos = await query;
        const officeFurnitureItems = officeFurnitureItemDtos.map((dto) => (0, items_dto_converter_1.officeFurnitureItemDtoToOfficeFurnitureConverter)(dto));
        return (officeFurnitureItems === null || officeFurnitureItems === void 0 ? void 0 : officeFurnitureItems.length) > 0 ? officeFurnitureItems : [];
    }
    async getOfficeEquipmentItems(filter) {
        const query = this.knex
            .from("office_equipment")
            .innerJoin("items", "office_equipment.item_id", "items.id");
        if (filter === null || filter === void 0 ? void 0 : filter.byContainerIds) {
            query.whereIn("items.container_id", filter.byContainerIds);
        }
        if (filter === null || filter === void 0 ? void 0 : filter.byItemIds) {
            query.whereIn("items.id", filter.byItemIds);
        }
        const officeEquipmentItemDtos = await query;
        const officeEquipmentItems = officeEquipmentItemDtos.map((dto) => (0, items_dto_converter_1.officeEquipmentItemDtoToOfficeEquipmentItemConverter)(dto));
        return (officeEquipmentItems === null || officeEquipmentItems === void 0 ? void 0 : officeEquipmentItems.length) > 0 ? officeEquipmentItems : [];
    }
    async upsertOfficeEquipment(input) {
        if (!input)
            return [];
        const validationResult = joi_1.default.array()
            .items(joi_1.default.object().keys({
            id: joi_1.default.string(),
            classification: joi_1.default.string().valid(...Object.values(graphql_2.ClassificationEnum)),
            container_id: joi_1.default.string(),
            isClassified: joi_1.default.boolean(),
            isFragile: joi_1.default.boolean(),
            name: joi_1.default.string(),
            realityId: joi_1.default.number(),
            secGroups: joi_1.default.array().items(joi_1.default.string()),
        }))
            .validate(input);
        if (validationResult.error) {
            throw new graphql_1.GraphQLError(`upsertOfficeEquipment input validation failed ${validationResult.error}`);
        }
        const insertOfficeEquipmentDtos = [];
        const insertItemDtos = [];
        const updateOfficeEquipmentDtos = [];
        const updateItemDtos = [];
        input.forEach((officeEquipment) => {
            var _a;
            const itemDto = lodash_1.default.omitBy({
                id: officeEquipment.id,
                container_id: officeEquipment.container_id,
                name: officeEquipment.name,
                reality_id: (_a = officeEquipment.realityId) !== null && _a !== void 0 ? _a : undefined,
                classification: officeEquipment.classification
                    ? officeEquipment.classification
                    : graphql_2.ClassificationEnum.Unclas,
                is_classified: officeEquipment.isClassified,
                sec_groups: officeEquipment.secGroups,
            }, lodash_1.default.isNil);
            function convertOfficeEquipmentFieldDto(upsertOfficeEquipment) {
                return lodash_1.default.omitBy({ is_fragile: upsertOfficeEquipment.isFragile }, lodash_1.default.isNil);
            }
            if (lodash_1.default.isNil(itemDto === null || itemDto === void 0 ? void 0 : itemDto.id)) {
                itemDto.id = (0, uuid_1.v4)();
                const officeEquipmentDto = Object.assign({ item_id: itemDto.id }, convertOfficeEquipmentFieldDto(officeEquipment));
                insertItemDtos.push(itemDto);
                insertOfficeEquipmentDtos.push(officeEquipmentDto);
            }
            else {
                const officeEquipmentDto = Object.assign({ item_id: itemDto.id }, convertOfficeEquipmentFieldDto(officeEquipment));
                updateItemDtos.push(itemDto);
                updateOfficeEquipmentDtos.push(officeEquipmentDto);
            }
        });
        let transaction;
        try {
            transaction = await this.knex.transaction();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`upsertOfficeEquipment failed ${error.messgae}`);
        }
        try {
            let insertItemsDtosReturn;
            if (!lodash_1.default.isEmpty(insertItemDtos)) {
                insertItemsDtosReturn = await this.knex("items")
                    .transacting(transaction)
                    .insert(insertItemDtos)
                    .returning("*");
            }
            let insertOfficeEquipmentDtosReturn;
            if (!lodash_1.default.isEmpty(insertOfficeEquipmentDtos)) {
                insertOfficeEquipmentDtosReturn = await this.knex("office_equipment")
                    .transacting(transaction)
                    .insert(insertOfficeEquipmentDtos)
                    .returning("*");
            }
            let updateItemsDtosReturn;
            if (!lodash_1.default.isEmpty(updateItemDtos)) {
                updateItemsDtosReturn = await this.knex("items")
                    .transacting(transaction)
                    .update(updateItemDtos)
                    .where("id")
                    .returning("*");
            }
            let updateOfficeEquipmentDtosReturn;
            if (!lodash_1.default.isEmpty(updateItemDtos)) {
                updateOfficeEquipmentDtosReturn = await this.knex("office_equipment")
                    .transacting(transaction)
                    .update(updateOfficeEquipmentDtos)
                    .returning("*");
            }
            const itemsDtosReturnMap = new Map();
            [...insertItemsDtosReturn, ...updateItemsDtosReturn].forEach((x) => itemsDtosReturnMap.set(x.id, x));
            await transaction.commit();
            return [
                ...insertOfficeEquipmentDtosReturn,
                ...updateOfficeEquipmentDtosReturn,
            ].map((x) => {
                return Object.assign({}, (0, items_dto_converter_1.officeEquipmentItemDtoToOfficeEquipmentItemConverter)(Object.assign(Object.assign({}, x), itemsDtosReturnMap.get(x.item_id))));
            });
        }
        catch (error) {
            await transaction.rollback();
            throw new graphql_1.GraphQLError(`upsertOfficeEquipment failed ${error.messgae}`);
        }
    }
    async moveItems(input, entityTypes) {
        if (!input)
            return [];
        const validationResult = joi_1.default.array()
            .items(joi_1.default.object().keys({
            item_id: joi_1.default.string().required(),
            container_id: joi_1.default.string().required(),
        }))
            .validate(input);
        if (validationResult.error) {
            throw new graphql_1.GraphQLError(`moveItems input validation failed ${validationResult.error}`);
        }
        try {
            const res = await (0, knex_batch_update_1.knexBatchInsertOrUpdate)(this.knex, "items", "id", input.map((x) => {
                return { id: x.item_id, container_id: x.container_id };
            }), "update");
            return this.getItems({
                byEntityType: entityTypes.byEntityType,
                byItemIds: res.map((x) => x.id),
            });
        }
        catch (error) {
            throw new graphql_1.GraphQLError(`moveItems failed ${error}`);
        }
    }
    async removeItems(input) {
        if (!input)
            false;
        const validationResult = joi_1.default.object()
            .keys({
            ids: joi_1.default.array().items(joi_1.default.string().required()).required(),
            allowPartialDelete: joi_1.default.boolean(),
        })
            .validate(input);
        if (validationResult.error) {
            throw new graphql_1.GraphQLError(`removeItems input validation failed ${validationResult.error}`);
        }
        try {
            const query = this.knex("items").whereIn("id", input.ids).returning("id");
            if (this.config.repo.deletions.logicalDelete) {
                query.update("is_deleted", true);
            }
            else {
                query.del();
            }
            const trx = await this.knex.transaction();
            const res = await query.transacting(trx);
            const allowPartialDelete = this.config.repo.deletions.allowPartialDelete &&
                input.allowPartialDelete;
            if (res.length === input.ids.length || allowPartialDelete) {
                await trx.commit();
                return res;
            }
            else {
                await trx.rollback();
                return [];
            }
        }
        catch (error) {
            throw new graphql_1.GraphQLError(`removeItems failed ${error}`);
        }
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dal_service_1.DalService,
        app_config_service_1.AppConfigService])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map
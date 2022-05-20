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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeEquipmentItemsContainerResolver = exports.OfficeFurnitureItemsContainerResolver = exports.SoftwareItemsContainerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dataloader_1 = __importDefault(require("dataloader"));
const _ = __importStar(require("lodash"));
let SoftwareItemsContainerResolver = class SoftwareItemsContainerResolver {
    async container(item, containersLoader) {
        if (_.isNil(item.container_id))
            return undefined;
        return containersLoader.load(item.container_id);
    }
};
__decorate([
    (0, graphql_1.ResolveField)("container"),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Context)("containersLoader")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dataloader_1.default]),
    __metadata("design:returntype", Promise)
], SoftwareItemsContainerResolver.prototype, "container", null);
SoftwareItemsContainerResolver = __decorate([
    (0, graphql_1.Resolver)("Software")
], SoftwareItemsContainerResolver);
exports.SoftwareItemsContainerResolver = SoftwareItemsContainerResolver;
let OfficeFurnitureItemsContainerResolver = class OfficeFurnitureItemsContainerResolver {
    async container(item, containersLoader) {
        if (_.isNil(item.container_id))
            return undefined;
        return containersLoader.load(item.container_id);
    }
};
__decorate([
    (0, graphql_1.ResolveField)("container"),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Context)("containersLoader")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dataloader_1.default]),
    __metadata("design:returntype", Promise)
], OfficeFurnitureItemsContainerResolver.prototype, "container", null);
OfficeFurnitureItemsContainerResolver = __decorate([
    (0, graphql_1.Resolver)("OfficeFurniture")
], OfficeFurnitureItemsContainerResolver);
exports.OfficeFurnitureItemsContainerResolver = OfficeFurnitureItemsContainerResolver;
let OfficeEquipmentItemsContainerResolver = class OfficeEquipmentItemsContainerResolver {
    async container(item, containersLoader) {
        if (_.isNil(item.container_id))
            return undefined;
        return containersLoader.load(item.container_id);
    }
};
__decorate([
    (0, graphql_1.ResolveField)("container"),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Context)("containersLoader")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dataloader_1.default]),
    __metadata("design:returntype", Promise)
], OfficeEquipmentItemsContainerResolver.prototype, "container", null);
OfficeEquipmentItemsContainerResolver = __decorate([
    (0, graphql_1.Resolver)("OfficeEquipment")
], OfficeEquipmentItemsContainerResolver);
exports.OfficeEquipmentItemsContainerResolver = OfficeEquipmentItemsContainerResolver;
//# sourceMappingURL=items.container.resolver.js.map
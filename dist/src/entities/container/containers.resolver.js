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
exports.ContainersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const dataloader_1 = __importDefault(require("dataloader"));
const _ = __importStar(require("lodash"));
const graphql_2 = require("../../generated/graphql");
const extract_union_types_from_graphql_info_1 = require("../../utils/extract.union.types.from.graphql.info");
const is_too_complex_query_1 = require("../../utils/is.too.complex.query");
const containers_service_1 = require("./containers.service");
let ContainersResolver = class ContainersResolver {
    constructor(containersService) {
        this.containersService = containersService;
    }
    async container(info, container, softwareItemsLoader, officeEquipmentItemsLoader, officeFurnitureItemsLoader) {
        if (_.isNil(container === null || container === void 0 ? void 0 : container.id))
            return [];
        const loaders = [];
        (0, extract_union_types_from_graphql_info_1.extractUnionTypesFromGraphqlInfo)(info).forEach((x) => {
            if (graphql_2.ItemTypes[x] === graphql_2.ItemTypes.Software) {
                loaders.push(softwareItemsLoader.load(container.id));
            }
            if (graphql_2.ItemTypes[x] === graphql_2.ItemTypes.OfficeEquipment) {
                loaders.push(officeEquipmentItemsLoader.load(container.id));
            }
            if (graphql_2.ItemTypes[x] === graphql_2.ItemTypes.OfficeFurniture) {
                loaders.push(officeFurnitureItemsLoader.load(container.id));
            }
        });
        const res = await Promise.all(loaders);
        return res.reduce((acc, curr) => {
            if (curr)
                acc.push(...curr);
            return acc;
        }, []);
    }
    async getContainers(info, args) {
        (0, is_too_complex_query_1.throwIfTooComplex)(info, ["items", "container"]);
        return this.containersService.getByFilter(args.filter);
    }
};
__decorate([
    (0, graphql_1.ResolveField)("items"),
    __param(0, (0, graphql_1.Info)()),
    __param(1, (0, graphql_1.Parent)()),
    __param(2, (0, graphql_1.Context)("softwareItemsLoader")),
    __param(3, (0, graphql_1.Context)("officeEquipmentItemsLoader")),
    __param(4, (0, graphql_1.Context)("officeFurnitureItemsLoader")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dataloader_1.default,
        dataloader_1.default,
        dataloader_1.default]),
    __metadata("design:returntype", Promise)
], ContainersResolver.prototype, "container", null);
__decorate([
    (0, graphql_1.Query)("containers"),
    __param(0, (0, graphql_1.Info)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContainersResolver.prototype, "getContainers", null);
ContainersResolver = __decorate([
    (0, graphql_1.Resolver)("Container"),
    __metadata("design:paramtypes", [containers_service_1.ContainerService])
], ContainersResolver);
exports.ContainersResolver = ContainersResolver;
//# sourceMappingURL=containers.resolver.js.map
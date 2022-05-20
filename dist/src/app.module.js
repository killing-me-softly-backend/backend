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
const graphql_1 = require("@nestjs/graphql");
const express_1 = require("express");
const nest_winston_1 = require("nest-winston");
const common_module_1 = require("./common/common.module");
const config_1 = require("./config");
const dal_module_1 = require("./dal/dal.module");
const cats_module_1 = require("./entities/cats/cats.module");
const containers_loader_1 = require("./entities/container/containers.loader");
const containers_module_1 = require("./entities/container/containers.module");
const containers_service_1 = require("./entities/container/containers.service");
const items_loader_1 = require("./entities/items/items.loader");
const items_module_1 = require("./entities/items/items.module");
const items_service_1 = require("./entities/items/items.service");
const owners_loader_1 = require("./entities/owners/owners.loader");
const owners_module_1 = require("./entities/owners/owners.module");
const owners_service_1 = require("./entities/owners/owners.service");
const logger_1 = require("./logger/logger");
const express_request_duration_1 = require("./utils/express-request-duration");
const graphql_extract_operation_middlewatr_1 = require("./utils/graphql-extract-operation-middlewatr");
const is_prod_1 = require("./utils/is.prod");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply((0, express_1.json)(), express_request_duration_1.RequestDurationMiddleware, graphql_extract_operation_middlewatr_1.GraphqlExtractOperationMiddleware)
            .forRoutes("*");
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
            common_module_1.CommonModule,
            dal_module_1.DalModule,
            graphql_1.GraphQLModule.forRootAsync({
                imports: [owners_module_1.OwnersModule, containers_module_1.ContainersModule, items_module_1.ItemsModule],
                useFactory: (ownersService, containerService, itemsService) => ({
                    typePaths: ["./**/*.graphql"],
                    context: () => ({
                        randomValue: Math.random(),
                        ownersLoader: (0, owners_loader_1.createOwnersLoader)(ownersService),
                        containersLoader: (0, containers_loader_1.createContainersLoader)(containerService),
                        itemsLoader: (0, items_loader_1.createItemsLoader)(itemsService),
                        softwareItemsLoader: (0, items_loader_1.createSoftwareItemsLoader)(itemsService),
                        officeEquipmentItemsLoader: (0, items_loader_1.createOfficeEquipmentItemsLoader)(itemsService),
                        officeFurnitureItemsLoader: (0, items_loader_1.createOfficeFurnitureItemsLoader)(itemsService),
                    }),
                    formatError: (error) => {
                        if ((0, is_prod_1.isProd)() || true) {
                            delete error.extensions.exception.stacktrace;
                        }
                        const graphQLFormattedError = Object.assign({}, error);
                        return graphQLFormattedError;
                    },
                }),
                inject: [owners_service_1.OwnersService, containers_service_1.ContainerService, items_service_1.ItemsService],
            }),
            cats_module_1.CatsModule,
            items_module_1.ItemsModule,
            containers_module_1.ContainersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
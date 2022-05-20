import { AppConfigService } from "../../config/app.config.service";
import { DalService } from "../../dal/dal.service";
import { ItemTypes, MoveItem, RemoveItems, UpsertOfficeEquipment } from "../../generated/graphql";
import { ItemWithRef, OfficeEquipmentWithRef } from "./item.with.references";
export interface ItemsFilter {
    byEntityType?: ItemTypes[];
    byContainerIds?: readonly string[];
    byItemIds?: readonly string[];
}
export declare class ItemsService {
    private dalService;
    private configService;
    private knex;
    private config;
    constructor(dalService: DalService, configService: AppConfigService);
    getItems(filter: ItemsFilter): Promise<ItemWithRef[]>;
    getSoftwareItems(filter?: Pick<ItemsFilter, "byContainerIds" | "byItemIds">): Promise<import("./item.with.references").SoftwareWithRef[]>;
    getOfficeFurnitureItems(filter?: Pick<ItemsFilter, "byContainerIds" | "byItemIds">): Promise<import("./item.with.references").OfficeFurnitureWithRef[]>;
    getOfficeEquipmentItems(filter?: Pick<ItemsFilter, "byContainerIds" | "byItemIds">): Promise<OfficeEquipmentWithRef[]>;
    upsertOfficeEquipment(input: UpsertOfficeEquipment[]): Promise<OfficeEquipmentWithRef[]>;
    moveItems(input: MoveItem[], entityTypes?: Pick<ItemsFilter, "byEntityType">): Promise<ItemWithRef[]>;
    removeItems(input: RemoveItems): Promise<string[]>;
}

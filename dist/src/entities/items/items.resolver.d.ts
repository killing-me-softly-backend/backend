import { Item, MoveItem, OfficeEquipment, RemoveItems, UpsertOfficeEquipment } from "../../generated/graphql";
import { ItemWithRef } from "./item.with.references";
import { ItemsService } from "./items.service";
export declare class ItemsResolver {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    __resolveType(obj: Item, context: any, info: any): "OfficeEquipment" | "OfficeFurniture" | "Software";
    getItems(info: any, realityId: string): Promise<ItemWithRef[]>;
    upsertOfficeEquipment(args: {
        input: UpsertOfficeEquipment[];
    }, info: any, realityId: string): Promise<OfficeEquipment[]>;
    moveItems(args: {
        input: MoveItem[];
    }, info: any, realityId: string): Promise<ItemWithRef[]>;
    removeItems(args: {
        input: RemoveItems;
    }, info: any, realityId: string): Promise<string[]>;
}

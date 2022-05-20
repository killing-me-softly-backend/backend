import DataLoader from "dataloader";
import { ItemWithRef, OfficeEquipmentWithRef, OfficeFurnitureWithRef, SoftwareWithRef } from "./item.with.references";
import { ItemsService } from "./items.service";
export declare function createItemsLoader(itemsService: ItemsService): DataLoader<string, ItemWithRef[], string>;
export declare function createSoftwareItemsLoader(itemsService: ItemsService): DataLoader<string, SoftwareWithRef[], string>;
export declare function createOfficeFurnitureItemsLoader(itemsService: ItemsService): DataLoader<string, OfficeFurnitureWithRef[], string>;
export declare function createOfficeEquipmentItemsLoader(itemsService: ItemsService): DataLoader<string, OfficeEquipmentWithRef[], string>;

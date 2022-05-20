import DataLoader from "dataloader";
import { Container, Item, QueryContainersArgs } from "../../generated/graphql";
import { OfficeFurnitureWithRef, SoftwareWithRef } from "../items/item.with.references";
import { ContainerService } from "./containers.service";
export declare class ContainersResolver {
    private containersService;
    constructor(containersService: ContainerService);
    container(info: any, container: Container, softwareItemsLoader: DataLoader<string, SoftwareWithRef[]>, officeEquipmentItemsLoader: DataLoader<string, OfficeFurnitureWithRef[]>, officeFurnitureItemsLoader: DataLoader<string, OfficeFurnitureWithRef[]>): Promise<Item[]>;
    getContainers(info: any, args?: QueryContainersArgs): Promise<Container[]>;
}

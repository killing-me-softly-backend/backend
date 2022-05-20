import DataLoader from "dataloader";
import { Container } from "../../generated/graphql";
import { OfficeEquipmentWithRef, OfficeFurnitureWithRef, SoftwareWithRef } from "./item.with.references";
export declare class SoftwareItemsContainerResolver {
    container(item: SoftwareWithRef, containersLoader: DataLoader<string, Container>): Promise<Container>;
}
export declare class OfficeFurnitureItemsContainerResolver {
    container(item: OfficeFurnitureWithRef, containersLoader: DataLoader<string, Container>): Promise<Container>;
}
export declare class OfficeEquipmentItemsContainerResolver {
    container(item: OfficeEquipmentWithRef, containersLoader: DataLoader<string, Container>): Promise<Container>;
}

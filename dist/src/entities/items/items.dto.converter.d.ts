import { OfficeEquipmentItemDto, OfficeFurnitureItemDto, SoftwareItemDto } from "../../dal/dal.types";
import { OfficeEquipmentWithRef, OfficeFurnitureWithRef, SoftwareWithRef } from "./item.with.references";
export declare function softwareItemDtoToSoftwareItemConverter(dto: SoftwareItemDto): SoftwareWithRef;
export declare function officeEquipmentItemDtoToOfficeEquipmentItemConverter(dto: OfficeEquipmentItemDto): OfficeEquipmentWithRef;
export declare function officeFurnitureItemDtoToOfficeFurnitureConverter(dto: OfficeFurnitureItemDto): OfficeFurnitureWithRef;

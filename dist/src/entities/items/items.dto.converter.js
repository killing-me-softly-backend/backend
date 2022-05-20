"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeFurnitureItemDtoToOfficeFurnitureConverter = exports.officeEquipmentItemDtoToOfficeEquipmentItemConverter = exports.softwareItemDtoToSoftwareItemConverter = void 0;
const item_dto_converter_1 = require("./item.dto.converter");
function softwareItemDtoToSoftwareItemConverter(dto) {
    return Object.assign(Object.assign({}, (0, item_dto_converter_1.itemDtoToItemConverter)(dto)), { __typename: "Software", isOpenSource: dto.is_open_source, container_id: dto.container_id });
}
exports.softwareItemDtoToSoftwareItemConverter = softwareItemDtoToSoftwareItemConverter;
function officeEquipmentItemDtoToOfficeEquipmentItemConverter(dto) {
    return Object.assign(Object.assign({}, (0, item_dto_converter_1.itemDtoToItemConverter)(dto)), { __typename: "OfficeEquipment", isFragile: dto.is_fragile, container_id: dto.container_id });
}
exports.officeEquipmentItemDtoToOfficeEquipmentItemConverter = officeEquipmentItemDtoToOfficeEquipmentItemConverter;
function officeFurnitureItemDtoToOfficeFurnitureConverter(dto) {
    return Object.assign(Object.assign({}, (0, item_dto_converter_1.itemDtoToItemConverter)(dto)), { __typename: "OfficeFurniture", isWood: dto.is_wood, container_id: dto.container_id });
}
exports.officeFurnitureItemDtoToOfficeFurnitureConverter = officeFurnitureItemDtoToOfficeFurnitureConverter;
//# sourceMappingURL=items.dto.converter.js.map
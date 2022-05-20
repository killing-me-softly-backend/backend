"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOfficeEquipmentItemsLoader = exports.createOfficeFurnitureItemsLoader = exports.createSoftwareItemsLoader = exports.createItemsLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
function createItemsLoader(itemsService) {
    return new dataloader_1.default(async (container_ids) => {
        const items = await itemsService.getItems({
            byContainerIds: container_ids,
        });
        const itemsMap = new Map();
        items.forEach((item) => {
            var _a;
            const current = (_a = itemsMap.get(item.container_id)) !== null && _a !== void 0 ? _a : [];
            current.push(item);
            itemsMap.set(item.container_id, current);
        });
        return container_ids.map((id) => itemsMap.get(id));
    });
}
exports.createItemsLoader = createItemsLoader;
function createSoftwareItemsLoader(itemsService) {
    return new dataloader_1.default(async (container_ids) => {
        const items = await itemsService.getSoftwareItems({
            byContainerIds: container_ids,
        });
        const itemsMap = new Map();
        items.forEach((item) => {
            var _a;
            const current = (_a = itemsMap.get(item.container_id)) !== null && _a !== void 0 ? _a : [];
            current.push(item);
            itemsMap.set(item.container_id, current);
        });
        return container_ids.map((id) => itemsMap.get(id));
    });
}
exports.createSoftwareItemsLoader = createSoftwareItemsLoader;
function createOfficeFurnitureItemsLoader(itemsService) {
    return new dataloader_1.default(async (container_ids) => {
        const items = await itemsService.getOfficeFurnitureItems({
            byContainerIds: container_ids,
        });
        const itemsMap = new Map();
        items.forEach((item) => {
            var _a;
            const current = (_a = itemsMap.get(item.container_id)) !== null && _a !== void 0 ? _a : [];
            current.push(item);
            itemsMap.set(item.container_id, current);
        });
        return container_ids.map((id) => itemsMap.get(id));
    });
}
exports.createOfficeFurnitureItemsLoader = createOfficeFurnitureItemsLoader;
function createOfficeEquipmentItemsLoader(itemsService) {
    return new dataloader_1.default(async (container_ids) => {
        const items = await itemsService.getOfficeEquipmentItems({
            byContainerIds: container_ids,
        });
        const itemsMap = new Map();
        items.forEach((item) => {
            var _a;
            const current = (_a = itemsMap.get(item.container_id)) !== null && _a !== void 0 ? _a : [];
            current.push(item);
            itemsMap.set(item.container_id, current);
        });
        return container_ids.map((id) => itemsMap.get(id));
    });
}
exports.createOfficeEquipmentItemsLoader = createOfficeEquipmentItemsLoader;
//# sourceMappingURL=items.loader.js.map
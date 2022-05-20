"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContainersLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const mapFromArray_1 = require("../../utils/mapFromArray");
const container_dto_converter_1 = require("./container.dto.converter");
function createContainersLoader(containerService) {
    return new dataloader_1.default(async (ids) => {
        const containers = await containerService.getByIds(ids);
        const containersMap = (0, mapFromArray_1.mapFromArray)(containers, (container) => container === null || container === void 0 ? void 0 : container.id);
        return ids.map((id) => {
            const value = containersMap[id];
            if (!value)
                return null;
            return (0, container_dto_converter_1.containerDtoToContainerConverter)(value);
        });
    });
}
exports.createContainersLoader = createContainersLoader;
//# sourceMappingURL=containers.loader.js.map
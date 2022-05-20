"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemDtoToItemConverter = void 0;
const base_entity_dto_converter_1 = require("../base.entity/base.entity.dto.converter");
function itemDtoToItemConverter(dto) {
    return Object.assign(Object.assign({}, (0, base_entity_dto_converter_1.baseEntityDtoToBaseEntityConverter)(dto)), { name: dto.name });
}
exports.itemDtoToItemConverter = itemDtoToItemConverter;
//# sourceMappingURL=item.dto.converter.js.map
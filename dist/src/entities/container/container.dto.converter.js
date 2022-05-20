"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerDtoToContainerConverter = void 0;
const base_entity_dto_converter_1 = require("../base.entity/base.entity.dto.converter");
function containerDtoToContainerConverter(dto) {
    const res = Object.assign(Object.assign({}, (0, base_entity_dto_converter_1.baseEntityDtoToBaseEntityConverter)(dto)), { __typename: "Container", items: undefined, location: dto.location });
    return res;
}
exports.containerDtoToContainerConverter = containerDtoToContainerConverter;
//# sourceMappingURL=container.dto.converter.js.map
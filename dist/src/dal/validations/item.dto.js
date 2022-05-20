"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDtoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const base_entity_dto_1 = require("./base.entity.dto");
exports.ItemDtoSchema = base_entity_dto_1.baseEntityDtoSchema
    .keys({ name: joi_1.default.string().required() })
    .meta({
    className: "ItemDto",
});
//# sourceMappingURL=item.dto.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareItemDtoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const item_dto_1 = require("./item.dto");
exports.SoftwareItemDtoSchema = item_dto_1.ItemDtoSchema.keys({
    item_id: joi_1.default.string().required().uuid({ version: "uuidv4" }),
    is_open_source: joi_1.default.boolean(),
}).meta({
    className: "SoftwareItemDto",
});
//# sourceMappingURL=software.item.dto.js.map
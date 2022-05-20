"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseEntityDtoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.baseEntityDtoSchema = joi_1.default.object({
    id: joi_1.default.string().required().uuid({ version: "uuidv4" }),
    reality_id: joi_1.default.number().required(),
    classification: joi_1.default.string(),
    created_at: joi_1.default.date().required(),
    updated_at: joi_1.default.date().required(),
    created_by: joi_1.default.string(),
    updated_by: joi_1.default.string(),
    is_deleted: joi_1.default.boolean().required(),
    is_classified: joi_1.default.boolean().required(),
    sec_groups: joi_1.default.array().items(joi_1.default.string()),
}).meta({
    className: "baseEntityDto",
});
//# sourceMappingURL=base.entity.dto.js.map
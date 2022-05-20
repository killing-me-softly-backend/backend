"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseEntityDtoToBaseEntityConverter = void 0;
function baseEntityDtoToBaseEntityConverter(dto) {
    return {
        id: dto.id,
        createdBy: dto.created_by,
        creationTime: dto.created_at,
        realityId: dto.reality_id,
        classification: dto.classification,
        isClassified: dto.is_classified,
        isDeleted: dto.is_deleted,
        lastUpdateBy: dto.updated_by,
        secGroups: dto.sec_groups,
    };
}
exports.baseEntityDtoToBaseEntityConverter = baseEntityDtoToBaseEntityConverter;
//# sourceMappingURL=base.entity.dto.converter.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOwnersLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const mapFromArray_1 = require("../../utils/mapFromArray");
function createOwnersLoader(ownersService) {
    return new dataloader_1.default(async (ids) => {
        const users = await ownersService.findByIds(ids);
        const usersMap = (0, mapFromArray_1.mapFromArray)(users, (user) => user.id);
        return ids.map((id) => usersMap[id]);
    });
}
exports.createOwnersLoader = createOwnersLoader;
//# sourceMappingURL=owners.loader.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFromArray = void 0;
function mapFromArray(array, keyStrategy) {
    const map = {};
    for (const item of array) {
        map[keyStrategy(item)] = item;
    }
    return map;
}
exports.mapFromArray = mapFromArray;
//# sourceMappingURL=mapFromArray.js.map
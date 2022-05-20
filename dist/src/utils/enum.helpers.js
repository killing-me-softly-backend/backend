"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumHelpers = void 0;
class EnumHelpers {
    static getNamesAndValues(e) {
        return EnumHelpers.getNames(e).map((n) => ({ name: n, value: e[n] }));
    }
    static getNames(e) {
        return EnumHelpers.getObjValues(e).filter((v) => typeof v === "string");
    }
    static getValues(e) {
        return EnumHelpers.getObjValues(e).filter((v) => typeof v === "number");
    }
    static getSelectList(e, stringConverter) {
        const selectList = new Map();
        this.getValues(e).forEach((val) => selectList.set(val, stringConverter(val)));
        return selectList;
    }
    static getSelectListAsArray(e, stringConverter) {
        return Array.from(this.getSelectList(e, stringConverter), (value) => ({
            value: value[0],
            presentation: value[1],
        }));
    }
    static getObjValues(e) {
        return Object.keys(e).map((k) => e[k]);
    }
}
exports.EnumHelpers = EnumHelpers;
//# sourceMappingURL=enum.helpers.js.map
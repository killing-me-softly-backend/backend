"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractUnionTypesFromGraphqlInfo = void 0;
function extractUnionTypesFromGraphqlInfo(info, first) {
    var _a, _b;
    const res = [];
    (_b = (_a = info === null || info === void 0 ? void 0 : info.fieldNodes[0].selectionSet) === null || _a === void 0 ? void 0 : _a.selections) === null || _b === void 0 ? void 0 : _b.forEach((selectionSet) => {
        if (first) {
            if (selectionSet.kind === "Field") {
                if (selectionSet.name.value === first) {
                    res.push(selectionSet.loc.startToken.next.next.next.next.value);
                }
            }
        }
        else {
            if (selectionSet.kind === "InlineFragment")
                res.push(selectionSet.loc.startToken.next.next.value);
        }
    });
    return res;
}
exports.extractUnionTypesFromGraphqlInfo = extractUnionTypesFromGraphqlInfo;
//# sourceMappingURL=extract.union.types.from.graphql.info.js.map
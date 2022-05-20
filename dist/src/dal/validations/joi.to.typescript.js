"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_to_typescript_1 = require("joi-to-typescript");
async function types() {
    console.log("Running joi-to-typescript...");
    const result = await (0, joi_to_typescript_1.convertFromDirectory)({
        schemaDirectory: "./src/dal/validations",
        typeOutputDirectory: "./src/dal/interfaces",
        debug: true,
    });
    if (result) {
        console.log("Completed joi-to-typescript");
    }
    else {
        console.log("Failed to run joi-to-typescrip");
    }
}
types();
//# sourceMappingURL=joi.to.typescript.js.map
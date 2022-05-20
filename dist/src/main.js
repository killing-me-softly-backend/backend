"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_winston_1 = require("nest-winston");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    let app;
    let logger;
    try {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
        logger = app.get(nest_winston_1.WINSTON_MODULE_PROVIDER);
        const port = app.get(config_1.AppConfigService).getConfig().server.port;
        await app.listen(port);
        logger.info(`Application is running on: ${await app.getUrl()}`);
    }
    catch (error) {
        logger.error(`nest factory error ${error}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
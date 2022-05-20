"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_winston_1 = require("nest-winston");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const exception_filter_1 = require("./common/exceptions.filter/exception.filter");
async function bootstrap() {
    let app;
    try {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
    }
    catch (error) {
        console.error(`nest factory error ${error}`);
    }
    const logger = app.get(nest_winston_1.WINSTON_MODULE_PROVIDER);
    const port = app.get(config_1.ConfigService).get("config").server.port;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exception_filter_1.GqlExceptionStackTraceFilter());
    try {
        await app.listen(port);
        logger.info(`Application is running on: ${await app.getUrl()}`);
    }
    catch (error) {
        logger.error(`nest factory error ${error}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
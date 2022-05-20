import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AppConfigService } from '../config';
import { getDurationInMilliseconds } from './getDurationInMilliseconds';

@Injectable()
export class RequestDurationMiddleware implements NestMiddleware {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private configService: AppConfigService
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime();
    const logger = this.logger;
    const loggerConfig = this.configService.getConfig().logger;

    function logDuration(): void {
      const durationInMilliseconds = getDurationInMilliseconds(start);
      let operation: string;

      logger.info(
        `method ${req?.method} endpoint ${req?.path} took ${durationInMilliseconds}[ms]`
      );
    }
    res.on('finish', () => {
      logDuration();
    });
    next();
  }
}

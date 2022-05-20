import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AppConfigService } from '../config';

@Injectable()
export class DalService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    @InjectConnection() private connection: Connection,
    private configService: AppConfigService
  ) {
    const config = this.configService.getConfig();
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SupportersController } from './supporters.controller';
import { Supporter, SupporterSchema } from './supporters.schema';
import { SupportersService } from './supporters.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Supporter.name, schema: SupporterSchema }]),
  ],
  controllers: [SupportersController],
  providers: [SupportersService],
})
export class SupportersModule {}

import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {Brand} from './brands.model';
import {ThrottlerModule} from '@nestjs/throttler';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
  imports: [SequelizeModule.forFeature([Brand]),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10
      }
    ]),],
  exports: [BrandsService]
})
export class BrandsModule {}

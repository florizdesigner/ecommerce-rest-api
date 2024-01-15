import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {Type} from './types.model';
import {BrandTypes} from './brand-types.model';
import {Brand} from '../brands/brands.model';

@Module({
  providers: [TypesService],
  controllers: [TypesController],
  imports: [
    SequelizeModule.forFeature([Type, Brand, BrandTypes]),
    TypesModule,
  ],
  exports: [TypesService]
})
export class TypesModule {}

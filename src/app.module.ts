import {Logger, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { TypesModule } from './types/types.module';
import {Brand} from './brands/brands.model';

@Module({
  controllers: [ItemsController],
  providers: [AppService, ItemsService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      // models: [User, Role, UserRoles],
      models: [User, Role, UserRoles, Brand],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    BrandsModule,
    ItemsModule,
    TypesModule,
  ],
})
export class AppModule {}

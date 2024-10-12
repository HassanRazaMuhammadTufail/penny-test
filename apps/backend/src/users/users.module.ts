import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersDao } from './dao/users.dao';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders, UsersDao],
})
export class UsersModule {}

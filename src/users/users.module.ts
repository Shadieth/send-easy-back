import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { CreateUserService } from './services/create-user.service';
import { UserRepository } from './users.repository';
import { UserSchema } from './schemas/create-user.schema';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { GetAllUsersService } from './services/get-all-users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [CreateUserService, GetUserByEmailService, GetAllUsersService, UserRepository],
})
export class UsersModule {}

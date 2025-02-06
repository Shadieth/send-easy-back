import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { CreateUserService } from './services/create-user.service';
import { UserRepository } from './users.repository';
import { UserSchema } from './schemas/create-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [CreateUserService, UserRepository],
})
export class UsersModule {}

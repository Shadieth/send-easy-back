import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto);
  }
} 
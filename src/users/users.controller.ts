import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserService } from './services/create-user.service';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { GetUserByEmailDto } from './dtos/get-user.dto';
import { GetAllUsersService } from './services/get-all-users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserByEmailService: GetUserByEmailService,
    private readonly getAllUsersService: GetAllUsersService,

  ) {}

  //Endpoint to create a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto);
  }

  //Endpoint to get all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersService.getAllUsers();
  }

  // //Endpoint to get a user by id
  // @Get(':id')
  // async getUserById(@Param() params: GetUserByIdDto): Promise<User | null> {
  //   return this.getUserByIdService.findById(params.id);
  // }

  //Endpoint to get a user by email
  @Get(':email')
  async getUserByEmail(@Param() params: GetUserByEmailDto): Promise<User | null> {
    return this.getUserByEmailService.findByEmail(params.email);
  }
}
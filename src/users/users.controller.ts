import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserService } from './services/create-user.service';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { GetAllUsersService } from './services/get-all-users.service';
import { UpdateUserByEmailService } from './services/update-user-by-email.service';
import { GetUserByIdDto, GetUserByEmailDto } from './dtos/get-user.dto';
import { GetUserByIdService } from './services/get-user-by-id.service';
import { DeleteUserByIdDto } from './dtos/delete-user.dto';
import { DeleteUserByIdService } from './services/delete-user-by-id.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserByEmailService: GetUserByEmailService,
    private readonly getAllUsersService: GetAllUsersService,
    private readonly updateUserByEmailService: UpdateUserByEmailService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly deleteUserByIdService: DeleteUserByIdService
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

  //Endpoint to get a user by email
  @Get('email/:email')
  async getUserByEmail(@Param() params: GetUserByEmailDto): Promise<User | null> {
    return this.getUserByEmailService.findByEmail(params.email);
  }

  //Endpoint to get a user by id
  @Get(':id')
  async getUserById(@Param() params: GetUserByIdDto): Promise<User | null> {
    return this.getUserByIdService.findById(params.id);
  }

  //Endpoint to update a user by email
  @Put(':email')
  async updateUserByEmail(@Param() params: GetUserByEmailDto, @Body() updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.updateUserByEmailService.updateUserByEmail(params.email, updateUserDto);
  }

  //Endpoint to delete a user by id
  @Delete(':id')
  async DeleteUserByIdDto(@Param() params: DeleteUserByIdDto): Promise<void> {
    await this.deleteUserByIdService.deleteUserById(params.id);
  }
}

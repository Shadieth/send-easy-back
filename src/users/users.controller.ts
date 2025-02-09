import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './users.repository';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userRepository: UserRepository) {}

  //Endpoint to create a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  //Endpoint to get a user by id
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  //Endpoint to get all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  //Endpoint to get a user by email
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

} 
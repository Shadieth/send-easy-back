import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class GetUserByEmailDto {
  @IsEmail()
  @IsNotEmpty() 
  email!: string;
}

export class GetUserByIdDto {
  @IsString()
  @IsNotEmpty()
  id!: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password!: string;
}

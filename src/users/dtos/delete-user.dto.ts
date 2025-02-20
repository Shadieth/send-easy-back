import { IsNotEmpty, IsString } from "class-validator";

export class DeleteUserByIdDto {
  @IsString()
  @IsNotEmpty()
  id!: string;
}
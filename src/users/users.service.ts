import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Cifrar la contraseña antes de crear el usuario
    const salt = await bcrypt.genSalt(10); // Generar un "sal" para el cifrado
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt); // Cifrar la contraseña

    // Crear el usuario con la contraseña cifrada
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword, // Usar la contraseña cifrada
    });

    return createdUser.save();
  }

  // Método para comparar la contraseña durante el inicio de sesión
  async validateUserPassword(email: string, password: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return false;
    }

    // Comparar la contraseña introducida con la cifrada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  }
}

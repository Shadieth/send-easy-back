import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

@Module({})
export class DatabaseModule {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/send_easy_db');
      console.log('Conexión a MongoDB establecida correctamente.');
    } catch (err) {
      console.error('Error en la conexión a MongoDB:', err);
      process.exit(1); // Salir si la conexión falla
    }
  }
}

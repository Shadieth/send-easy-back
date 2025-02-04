import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module'; // Importa el módulo de la base de datos

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}

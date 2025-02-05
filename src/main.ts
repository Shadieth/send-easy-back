import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './config/database.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Conectar a la base de datos
  await DatabaseModule.connect();


  // Habilitar las validaciones globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza error si se encuentran propiedades no válidas
    transform: true, // Transforma los datos entrantes en el tipo correcto
  }));

  await app.listen(port);
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

bootstrap();

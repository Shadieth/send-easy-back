import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './config/database.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Conectar a la base de datos
  await DatabaseModule.connect();

  await app.listen(port);
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

bootstrap();

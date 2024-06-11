import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //configuracion de swagger
  const config = new DocumentBuilder()
    .setTitle('Task Manager')
    .setDescription('The Task Manager API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //ruta
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  //corre en el puerto 3000
  
}
bootstrap();

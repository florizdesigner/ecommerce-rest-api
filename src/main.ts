import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import {ValidationPipe} from './pipes/validation.pipe'; // custom
import { ValidationPipe } from '@nestjs/common'; // system

async function start() {
  const PORT = process.env.SERVER_PORT || 5001;
  const app = await NestFactory.create(AppModule, {logger: ['error', 'warn']});

  const config = new DocumentBuilder()
    .setTitle('API Chats')
    .setDescription('Docs REST API')
    .setVersion('0.0.1')
    .addTag('floriz')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () =>
    console.log(`Server successfull started on port: ${PORT}`),
  );
}

start();

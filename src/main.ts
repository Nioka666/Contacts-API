import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function NestServer() {
  const app = await NestFactory.create(AppModule);
  await app.listen(666);
}

NestServer();

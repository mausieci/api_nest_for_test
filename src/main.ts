import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constans';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.enableCors(CORS);

  //console.log(process.env.NODE_ENV);
  console.log('PUERTO CONFIGURADO: ');
  console.log(configService.get('PORT'));

  //await app.listen(8000);
  await app.listen(configService.get('PORT'));
  console.log(`Application running on port: ${await app.getUrl()}`);
}
bootstrap();

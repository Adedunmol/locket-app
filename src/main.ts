import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
                    .setTitle('Locket API')
                    .setDescription('An API to replicate the locket app functionalites for sharing pictures with friends')
                    .setVersion('1.0')
                    .build();

  const document = SwaggerModule.createDocument(app,  config);

  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();

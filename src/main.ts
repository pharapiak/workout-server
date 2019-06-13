import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const options = new DocumentBuilder()
  //   .setTitle('Workout')
  //   .setDescription('The Workout API description')
  //   .setVersion('0.0.1')
  //   // .addTag('workout')
  //   .addTag('exercise')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

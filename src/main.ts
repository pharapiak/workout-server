import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';
import { AppModule } from './app.module';
import { ValidationPipe, INestApplication } from '@nestjs/common';


const port = process.env.PORT || 3000;

let app: INestApplication;

function shutdown(requestSource): void {
  console.log(`Got shutdown request via ${requestSource}`);
  console.log('shutting down');
  
  app.close().then(() => {
    console.log('HTTP server stopped');
  });
}

process.on('SIGINT', () => {
  shutdown('SIGINT');
});

async function bootstrap() {
  app = await NestFactory.create(AppModule);

  // const options = new DocumentBuilder()
  //   .setTitle('Workout')
  //   .setDescription('The Workout API description')
  //   .setVersion('0.0.1')
  //   // .addTag('workout')
  //   .addTag('exercise')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // tslint:disable-next-line: no-console
  console.log(`server is listening on ${port}`);
  await app.listen(port);
}
bootstrap();



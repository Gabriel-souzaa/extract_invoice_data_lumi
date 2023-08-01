import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UseCaseExceptionFilter } from './utils/filters/useCaseExpections.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      credentials: true,
      methods: '*',
      allowedHeaders: '*',
      preflightContinue: false,
      optionsSuccessStatus: 200,
    },
  });

  app.useGlobalFilters(new UseCaseExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Invoices')
    .setDescription('Api usada para listagem e extração de dados (nota fiscal)')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new WrapResponseInterceptor(), new TimeoutInterceptor())

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Coffee')
    .setDescription('This is the coffee app description docs')
    .setVersion('1.0')
    .build();

  const documentation = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, documentation);
  await app.listen(3000, () =>
    console.log(`Server has been started on the localhost:3000`),
  );
}
bootstrap();

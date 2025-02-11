import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';

import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
// controller => service => module

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new TransformInterceptor());

  return await app
    .listen(process.env.PORT ?? 3000)
    .then(() => {
      console.log('服务启动成功');
    })
    .catch(() => {
      console.log('系统异常，请稍后重试');
      return null;
    });
}
bootstrap();

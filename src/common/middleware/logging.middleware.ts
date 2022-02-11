import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('----request-response time----');
    console.log('Hi from middleware');

    res.on('finish', () => console.timeEnd('----request-response time----'))
    next();
  }
}

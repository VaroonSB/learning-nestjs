import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const req = context.getRequest<Request>();
    const res = context.getResponse<Response>();
    const statusCode = exception.getStatus();

    res.status(statusCode).json({
      statusCode,
      path: req.url,
      time: new Date().toISOString(),
      message: exception.message,
    });
  }
}

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

export interface Response<T> {
  data: T;
}

export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    console.log('Req Url: ', context.switchToHttp().getRequest().url);
    console.log('Req Method:', context.switchToHttp().getRequest().method);

    return next.handle().pipe(
      tap((data) => console.log(data)),
      map((response) => ({ data: response })),
    );
  }
}

import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { UseCaseException } from '../exceptions/useCase.exceptions';

@Catch(UseCaseException)
export class UseCaseExceptionFilter implements ExceptionFilter {
  catch(exception: UseCaseException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.getMessage(),
    });
  }
}

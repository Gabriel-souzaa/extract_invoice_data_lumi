import { Catch } from '@nestjs/common';

@Catch()
export class UseCaseException extends Error {
  private status: number;
  private messageTreated: string;

  constructor(message: string, statusCode: number) {
    super(message);

    this.messageTreated = message || 'Erro interno no servidor';
    this.status = statusCode || 500;
  }

  public getStatus() {
    return this.status;
  }

  public getMessage() {
    return this.messageTreated;
  }
}

export class AppError extends Error {
  statusCode: number;
  details: any;

  constructor(message:string, statusCode:number = 400, details:any = undefined) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

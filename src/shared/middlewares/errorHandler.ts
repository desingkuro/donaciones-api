import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError.js';

export function errorHandler(err:any, req:Request, res:Response, next:NextFunction) { // eslint-disable-line no-unused-vars
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      details: err.details ?? null,
    });
  }
  console.error(err);
  return res.status(500).json({ error: 'InternalServerError', message: 'Unexpected error' });
}

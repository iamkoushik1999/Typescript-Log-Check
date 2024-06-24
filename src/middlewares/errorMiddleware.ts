import { NextFunction, Request, Response } from 'express';

// Error Handler
export const errorHandler = (error: Error, req: Request, res: Response) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const message = error.message;
  const stack = error.stack;

  res.status(statusCode).json({ message: message, stack: stack });
};

// URL Not Found
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`Not Found ${req.originalUrl}`);
  next(error);
};

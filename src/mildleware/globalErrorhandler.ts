import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../App/interface/error';

import handleValidationError from '../App/Error/handleValidationError';
import handleCastError from '../App/Error/handleCastError';
import handleDuplicateError from '../App/Error/handleDuplicateError';
import AppError from '../App/Error/AppError';
import config from '../App/config';
import handleZodError from '../App/Error/handleZodErro';

const globalErrorHandler: ErrorRequestHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {  
  console.error('🛑 Global Error Handler Triggered:', err); // ✅ Debugging log

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [{ path: '', message: 'Something went wrong' }];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [{ path: '', message: err.message }];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [{ path: '', message: err.message }];
  }

  // ✅ Send JSON response immediately
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err.stack : null,
  });
};

export default globalErrorHandler;

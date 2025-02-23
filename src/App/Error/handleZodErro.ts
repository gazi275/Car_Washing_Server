import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => ({
    path: issue.path.length ? issue.path.join('.') : 'unknown',
    message: issue.message,
  }));

  return {
    statusCode: 400,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleZodError;

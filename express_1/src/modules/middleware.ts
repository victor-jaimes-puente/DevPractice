import { validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err: any = new Error('Validation Error');
    err.type = 'input';
    err.details = errors.array();
    next(err);
  } else {
    next();
  }
};
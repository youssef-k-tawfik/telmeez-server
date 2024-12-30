import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/customError.js";
import { LogLevels, Logger } from "../utils/logger.js";

const errorHandlerMiddleware = (
  error: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  let status = 500;
  let message = "Internal server error";

  if (error instanceof CustomError) {
    status = error.status;
    message = error.message;
  }

  Logger.log(LogLevels.ERROR, error.stack);

  res.status(status).json({ error: message });
};

export default errorHandlerMiddleware;


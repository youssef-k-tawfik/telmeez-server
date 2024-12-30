import express from "express";
import morgan from "morgan";
import { postgresConnection } from "./config/postgres.js";
import { LogLevels, Logger } from "./utils/logger.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

Logger.log(LogLevels.INFO, "starting app");

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Database connection
postgresConnection();
// mongoConnection();

// Routes
app.get("/", (_: express.Request, res: express.Response, next: express.NextFunction) => {
  // throw new customError(400, "Bad request");
  res.json({ message: "Service running" });
});

// Not found route
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware (Must be last middleware)
app.use(errorHandlerMiddleware);

export default app;

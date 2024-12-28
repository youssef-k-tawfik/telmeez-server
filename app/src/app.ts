import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import { postgresConnection } from "./config/postgres";
import { LogLevels, Logger } from "./utils/logger.js";

Logger.log(LogLevels.INFO, "starting app");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Database connection
postgresConnection();
// mongoConnection();

// Routes
app.get("/", (_: express.Request, res: express.Response) => {
  res.json({ message: "Service running" });
});

// Not found route
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
const handleErrors = (err: any, _: express.Request, res: express.Response) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
};
app.use(handleErrors);

export default app;

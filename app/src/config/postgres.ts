import "reflect-metadata";
import { DataSource } from "typeorm";
import { LogLevels, Logger } from "../utils/logger.js";
import { entities } from "../models/index.js";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.NODE_ENV !== "production",
  entities: entities,
});

export const postgresConnection = () => {
  PostgresDataSource.initialize()
    .then(() => Logger.log(LogLevels.INFO, "Database connected"))
    .catch((err) => Logger.log(LogLevels.ERROR, "Failed to connect to Postgres\n" + err));
};

export const postgresDisconnect = () => {
  PostgresDataSource.destroy()
    .then(() => Logger.log(LogLevels.INFO, "Database disconnected"))
    .catch((err) => Logger.log(LogLevels.ERROR, "Failed to disconnect to Postgres\n" + err));
};

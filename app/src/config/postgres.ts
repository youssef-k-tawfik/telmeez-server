import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "../models";

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
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));
};

export const postgresDisconnect = () => {
  PostgresDataSource.destroy()
    .then(() => console.log("Database disconnected"))
    .catch((err) => console.error(err));
};

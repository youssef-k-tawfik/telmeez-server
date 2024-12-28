import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entities";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // ???
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT as string),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: entities,
});

export const postgresConnection = () => {
  PostgresDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));
};

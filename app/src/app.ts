console.log("starting app");

import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

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
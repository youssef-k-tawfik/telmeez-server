import dotenv from "dotenv";
import app from "./src/app.js";
import { LogLevels, Logger } from "./src/utils/logger.js";

Logger.log(LogLevels.INFO, "Server entry point");

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  Logger.log(LogLevels.INFO, `Server is running on port ${PORT}`);
});

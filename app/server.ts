console.log("server entry point");

import dotenv from "dotenv";
import http from "http";
import app from "./src/app.js";

dotenv.config();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
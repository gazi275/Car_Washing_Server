import mongoose from "mongoose";
import app from "./app";
import config from "./App/config";
import { Server } from "http";
let server: Server;

async function startServer() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    server = app.listen(config.port, () => {
      console.log("Server is running on port {config.port}");
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();

process.on('unhandledRejection', (err) => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
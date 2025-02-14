import mongoose from "mongoose";
import app from "./app";
import config from "./App/config";


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main();

import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";
import process from "process";
if (!DB_URI) {
  throw new Error("DB_URI is not defined");
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(
      `MongoDB connected: ${conn.connection.host} in ${NODE_ENV} mode`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

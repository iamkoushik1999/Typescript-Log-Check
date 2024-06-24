import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL as string);
    console.log(`MONGODB Connected :-> ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

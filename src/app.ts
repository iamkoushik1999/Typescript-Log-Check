import express from 'express';
import 'dotenv/config';
import compression from 'compression';
// DATABASE
import connectDB from './config/db';
connectDB();
// Middleware
import { notFound, errorHandler } from './middlewares/errorMiddleware';

// APP
const app = express();

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;

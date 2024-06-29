import express from 'express';
import 'dotenv/config';
import compression from 'compression';
import morgan from 'morgan';
// DATABASE
import connectDB from './config/db';
connectDB();
// Middleware
import { notFound, errorHandler } from './middlewares/errorMiddleware';
// Routes
import studentRoutes from './routes/studentRoutes';
// Logger
import logger from './utils/logger';

// APP
const app = express();

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MORGAN
const morganFormat = ':method :url :status :response-time ms';

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Routes
app.use('/api/v1/students', studentRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;

import express from 'express';
import 'dotenv/config';
import compression from 'compression';

// APP
const app = express();

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;

// src/app.ts
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

// Mount API routes under /api
app.use('/api', routes);

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ message });
});

export default app;

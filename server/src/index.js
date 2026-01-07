import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import createError from 'http-errors';
import { connectToDatabase } from './lib/db.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import progressRouter from './routes/progress.routes.js';
import voiceRouter from './routes/voice.routes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

const limiter = rateLimit({ windowMs: 60_000, max: 120 });
app.use(limiter);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'tribal-education-backend', time: new Date().toISOString() });
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/progress', progressRouter);
app.use('/api/voice', voiceRouter);

app.use((_req, _res, next) => next(createError(404, 'Not Found')));

app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

const port = process.env.PORT || 8080;
await connectToDatabase();
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});



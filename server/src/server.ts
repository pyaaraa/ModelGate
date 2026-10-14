import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './app.js';
import { env } from './config/env.js';

async function connectDatabase(): Promise<void> {
  if (!env.mongoUri) {
    console.info('MONGODB_URI is not configured; starting without a database connection.');
    return;
  }

  await mongoose.connect(env.mongoUri);
  console.info('Connected to MongoDB.');
}

async function start(): Promise<void> {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      console.info(`ModelGate API listening on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error('Unable to start ModelGate API.', error);
    process.exitCode = 1;
  }
}

void start();

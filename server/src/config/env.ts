const parsePort = (value: string | undefined): number => {
  const port = Number(value ?? 5000);

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error('PORT must be a valid TCP port number.');
  }

  return port;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT),
  mongoUri: process.env.MONGODB_URI,
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
};

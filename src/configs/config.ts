const config = {
  app: {
    port: process.env.PORT ?? 5000,
  },
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? 27017,
    name: process.env.DB_NAME ?? 'ecommerce',
  },
};

export default config;

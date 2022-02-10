export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT || 5432,
  },
});

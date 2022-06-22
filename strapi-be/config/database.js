module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),
    connection: {
      host: env('DATABASE_HOST', 'database-strapi.chmpleaodutp.ap-southeast-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgresDBAWS'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
  },
});

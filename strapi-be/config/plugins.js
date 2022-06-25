module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 465),
        requireTLS: true,
        secure: true,
        auth: {
          type: "OAuth2",
          user: env("SMTP_USERNAME"),
          clientId: env("GMAIL_CLIENT_ID"),
          clientSecret: env("GMAIL_CLIENT_SECRET"),
          // accessToken: env("GMAIL_ACCESS_TOKEN"),
          refreshToken: env("GMAIL_REFRESH_TOKEN"),
          // expires: 500,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: true,
        },
      },
      // For Strapi Admin Email Configuration Test
      settings: {
        defaultFrom: env("SEND_FROM", "david@gmail.com"),
        defaultReplyTo: env("SEND_TO", "david@gmail.com"),
      },
    },
  },
});

const securityHeaders = [
  // prevent xss failure
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // prevent iframe
  {
    key: "X-Frame-Options",
    value: "deny",
  },
  // prevent mime sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  // disabled strict mode for render useEffect only once
  // reactStrictMode: true,
  // import svg
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // init .env variables
  env: {
    // DISCORD
    WEBHOOK_CONTACT: process.env.WEBHOOK_CONTACT,
    WEBHOOK_500: process.env.WEBHOOK_500,
    WEBHOOK_NEWSLETTER_EMAIL:
      process.env.WEBHOOK_NEWSLETTER_EMAIL,
    WEBHOOK_NEWSLETTER_LOG:
      process.env.WEBHOOK_NEWSLETTER_LOG,

    // NODEMAILER
    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: process.env.MAILER_PORT,
    MAILER_USER: process.env.MAILER_USER,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
  },
  // disable trash header
  poweredByHeader: false,
  // custom next server headers
  async headers() {
    return [
      {
        // apply to all routes
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
};

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '35a61ab885b246909305b0de1acfc2e4'),
  },
});

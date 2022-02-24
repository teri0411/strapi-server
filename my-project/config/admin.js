module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f27c874f6c13530512ee4df4ed508f25'),
  },
});

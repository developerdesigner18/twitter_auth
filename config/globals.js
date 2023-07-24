module.exports.CLIENT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://moonlit-valkyrie-eae172.netlify.app/';

module.exports.SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://twittwe-auth-backend.onrender.com';

module.exports.MONGO_URL =
  process.env.NODE_ENV === 'development'
    ? `mongodb://localhost:27017/userDB`
    : `mongodb://dcfa00b4af36d0926a748a9d989dcd25:admin123@15a.mongo.evennode.com:27019,15b.mongo.evennode.com:27019/userDB?authMechanism=DEFAULT&authSource=dcfa00b4af36d0926a748a9d989dcd25`;

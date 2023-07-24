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
    : `mongodb+srv://whyshouldItell:jpKKP9A4iUIXTQ83@no-name.r5wd7je.mongodb.net/userDB`;

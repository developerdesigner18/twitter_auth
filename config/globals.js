module.exports.CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://passport-twitter-login.netlify.app";

module.exports.SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://get-tweet-data-auth.herokuapp.com";

module.exports.MONGO_URL =
  process.env.NODE_ENV === 'development'
    ? `mongodb://localhost:27017/userDB`
    : `mongodb://localhost:27017/userDB`;

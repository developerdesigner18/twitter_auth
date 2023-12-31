require("dotenv").config();
const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const User = require("../models/user");
const { SERVER_URL } = require("./globals");

// save user._id to session as req.session.passport.user = '..'
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user); // attach user object to the request as req.user
    })
    .catch((e) => {
      done(new Error("Failed to deserialize a user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: `${SERVER_URL}/auth/redirect`,
    },
    async (token, tokenSecret, profile, done) => {
        console.log(token, 'token');
        const profileData = profile._json;
        let currentUser = await User.findOne({ _id: profileData.id });
        if (currentUser) {
          const user = {
            _id: profileData.id,
            name: profileData.name,
            screenName: profileData.screen_name,
            photo: profileData.profile_image_url,
            verified: profileData.verified,
            token: token,
          };
          await User.updateOne({ _id: profileData.id }, { $set: user });
          done(null, user);
        } else {
          // create new user if the database doesn't have this user
          currentUser = await new User({
            _id: profileData.id,
            name: profileData.name,
            screenName: profileData.screen_name,
            photo: profileData.profile_image_url,
            verified: profileData.verified,
            token: token,
          }).save();
          done(null, currentUser);
        }
     

      // find current user in UserModel
    }
  )
);

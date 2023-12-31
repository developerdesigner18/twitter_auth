const router = require("express").Router();
const passport = require("passport");
const { CLIENT_URL } = require("../config/globals");
const { getUserData } = require('../controller/auth.controller');

// send profile data if user is logged in
router.get('/', (req, res) => {
  console.log(req.cookies, 'req');
  res.status(200).json({ user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout();
  // req.session.destroy(); // delete session from db after logout
  res.redirect(CLIENT_URL);
});

router.get('/env', (req, res) => {
  console.log('env', process.env.TWITTER_CONSUMER_KEY);
});

router.get('/login', passport.authenticate('twitter'));

router.get(
  '/redirect',
  passport.authenticate('twitter', {
    // successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL,
  }),
  (req, res) => {
    console.log('req', req.session);
    res.redirect(`${CLIENT_URL}?user=${req.session.passport.user}`);
  }
);

router.post('/getUserData', getUserData);

module.exports = router;

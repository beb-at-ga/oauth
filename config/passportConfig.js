const passport = require('passport');
const passportGitHub2 = require('passport-github2');
const GitHubStrategy = passportGitHub2.Strategy;
const db = require('../models');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `http://127.0.0.1:3004/auth/github/callback`
}, 
function(accessToken, refreshToken, profile, done) {
  db.user.findOrCreate({
    where: {
      githubId: profile.id
    }
  }).spread((user, created) => {
    let tempUser = {...user.dataValues, accessToken};
    return done(null, tempUser);
  })
}))

passport.serializeUser((user, next) => {
  next(null, user);
})

passport.deserializeUser((user, next) => {
  next(null, user);
})

module.exports = passport;


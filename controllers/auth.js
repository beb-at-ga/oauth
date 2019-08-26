const router = require('express').Router();
// const db = require('../models');
const passport = require('../config/passportConfig');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', {
    failureRedirect: '/auth/github'
  }), (req, res) => {
  res.redirect('/');
});

module.exports = router;


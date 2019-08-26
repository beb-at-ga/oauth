const router = require('express').Router();
// const db = require('../models');
const axios = require('axios');


router.get('/repos', (req, res) => {
  let config = {
    headers: {
      'Authorization': `Bearer ${req.user.accessToken}`,
      'User-Agent': 'OAuth POC'
    }
  }

  // res.send(`Repo`);
  axios.get('https://api.github.com/user/repos', config)
  .then((response) => {
    // res.send(response.data);
    res.render('repos', {
      repos: response.data
    })
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;


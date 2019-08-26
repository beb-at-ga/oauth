const router = require('express').Router();
const axios = require('axios');

router.get('/repos', (req, res) => {
  let config = {
    headers: {
      'Authorization': `Bearer ${req.user.accessToken}`,
      'User-Agent': 'OAuth POC'
    }
  }

  axios.get('https://api.github.com/user/repos', config)
  .then((response) => {
    res.render('repos', {
      repos: response.data
    })
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;


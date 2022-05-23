const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Get de usuarios route');
});

module.exports = router;
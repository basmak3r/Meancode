var express = require('express')
var router = express.Router()

router.post('/api', function (req, res) {
    res.send('Post')
  })

  module.exports = router
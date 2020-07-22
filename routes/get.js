var express = require('express')
var router = express.Router()

router.get('/api', function (req, res) {
    res.send('GET')
  })

  module.exports = router
var express = require('express')
var router = express.Router()

router.delete('/api', function (req, res) {
    res.send('Delete')
  })

module.exports = router
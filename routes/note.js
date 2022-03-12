var express = require('express');
var router = express.Router();
router.get('/note', function(req, res, next) {
    res.render('note');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    res.render('index');
  });

router.get('/sobre', function(req, res, next) {
    res.render('sobre');
});

router.get('/cronograma', function(req, res, next) {
    res.render('cronograma/index');
});




module.exports = router;
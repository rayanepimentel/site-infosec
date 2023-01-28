const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    res.render('index');
  });

router.get('/whereAmI/:page', function(req, res, next) {
    res.render(`whereAmI/${req.params.page}`);
});

router.get('/cronograma/:page', function(req, res, next) {
    res.render(`cronograma/${req.params.page}`);
});

router.get('/hall', function(req, res, next) {
    res.render('hall/index');
});

router.get('/repo/:page', function(req, res, next) {
    res.render(`repo/${req.params.page}`);
});






module.exports = router;
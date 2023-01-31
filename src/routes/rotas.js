const express = require('express');
const router = express.Router();
const tw = require('../controller/shared').sharedTw;

router.get('/', function(req, res, next) {
    res.render('index', { tw: tw });
  });

router.get('/whereAmI/:page', function(req, res, next) {
    res.render(`whereAmI/${req.params.page}`, { tw: tw });
});

router.get('/cronograma/:page', function(req, res, next) {
    res.render(`cronograma/${req.params.page}`, { tw: tw });
});

router.get('/hall', function(req, res, next) {
    res.render('hall/index', { tw: tw });
});

router.get('/repo/:page', function(req, res, next) {
    res.render(`repo/${req.params.page}`, { tw: tw });
});



module.exports = router;
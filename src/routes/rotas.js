const express = require('express');
const router = express.Router();
const tw = require('../controller/shared').sharedTw;
const linkedin = require('../controller/shared').sharedLink;

router.get('/', function(req, res, next) {
    res.render('index', { tw: tw });
  });

router.get('/whereAmI/:page', function(req, res, next) {
    res.render(`whereAmI/${req.params.page}`, { tw: tw, linkedin: linkedin});
});

router.get('/cronograma/:page', function(req, res, next) {
    res.render(`cronograma/${req.params.page}`, { tw: tw, linkedin: linkedin });
});

router.get('/hall', function(req, res, next) {
    res.render('hall/index', { tw: tw, linkedin: linkedin });
});

router.get('/repo/:page', function(req, res, next) {
    res.render(`repo/${req.params.page}`, { tw: tw , linkedin: linkedin});
});



module.exports = router;
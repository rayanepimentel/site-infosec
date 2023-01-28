const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const indexRouter = require('./routes/rotas');

app.use(bodyParser.json());
app.use(express.static('publico'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'publico')));
app.use('/images', express.static(path.resolve(__dirname, './publico/img')))

app.use('/', indexRouter);


module.exports = app;
const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');

const HttpError = require('http-errors');

// get app
const app = express();

// logger
if(config.env==='development') {
    app.use(logger('dev'));
}

// get dist folder
const distDir = path.join(__dirname, '../../dist')

// use dist folder as hosting by express
app.use(express.static(distDir));

// parsing from api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// secure apps http
app.use(helmet());

// allow cors
app.use(cors());

// authenticate


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
//     next();
// });

// api router
app.use('/api/', routes);

// serve th index.html
app.get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')));

// catch the 404 and forward to error handler
app.use((req, res, next) => {
    const error = new HttpError(404);
    return next(error);
});

// error handler, stack trace
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
    next(err);
});

console.log("Hello");

module.exports = app;

const express = require('express');
const starRout = require('./api/router/star');


const app = express();


app.use('/',starRout.route3); 


module.exports = app;
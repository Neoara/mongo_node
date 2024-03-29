const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const app  = express();
app.use(cors());

const carsRouter = require('./routers/carsRouter');
const usersRouter = require('./routers/usersRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/cars', carsRouter);
app.use('/users', usersRouter);

const CONNECTION_STRING = "Your mongo Key";

mongoose.connect(CONNECTION_STRING, function(err){
    if(err) return console.log(err);
    app.listen(8080);
})

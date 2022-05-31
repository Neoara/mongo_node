const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const app  = express();
app.use(cors());

const carsRouter = require('./routers/carsRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const CONNECTION_STRING = "mongodb+srv://Neoara:Good99girl@cluster0.zewatul.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, function(err){
    if(err) return console.log(err);
    app.listen(8080);
})
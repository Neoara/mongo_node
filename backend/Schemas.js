const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarsSchema = new Schema({
    model: String, 
    color: String,
    year: Number
});

const UsersSchema = new Schema({
    login: String, 
    password: String,
    fullName: String,
    cars: [CarsSchema]
});

module.exports = {
    CarsSchema,
    UsersSchema
}
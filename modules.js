const mongoose = require("mongoose");
const schemas = require("./Schemas");

const Car = mongoose.model("Car", schemas.CarsSchema);
const User = mongoose.model("User", schemas.UsersSchema);

module.exports = { 
    Car, 
    User
}
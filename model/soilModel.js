const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
    name:String,
    city_id:String
});

const Soil = new mongoose.model("soil",soilSchema);

module.exports = Soil;
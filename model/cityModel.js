const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    state_id:String,
    name:String
})

const City = new mongoose.model('city', citySchema);

module.exports = City;
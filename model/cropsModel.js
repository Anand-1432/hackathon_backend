const mongoose = require('mongoose');

const cropsSchema = new mongoose.Schema({
    state_id: String,
    city_id: String,
    soil_id: String,
    name: String
})

const Crops = new mongoose.model('crops', cropsSchema);

module.exports = Crops;
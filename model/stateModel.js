const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name:String,
})

const State = new mongoose.model("state", stateSchema);

module.exports = State;
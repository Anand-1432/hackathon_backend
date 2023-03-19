const State = require('../model/soilModel');

exports.addSoil = async (req, res) => {
    try {
        const result = await State.create({ name: req.body.name, city_id: req.body.city_id });
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}

exports.getSoil = async (req, res) => {
    try {
        const result = await State.find({ city_id: req.body.city_id });
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}
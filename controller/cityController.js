const City = require("../model/cityModel");

exports.addCity = async (req, res) => {
    try {
        const result = await City.create({ name: req.body.name, state_id: req.body.state_id });
        res.status(201).json({ success: true, data: result })
    } catch (error) {
        console.log(error);
    }
}

exports.getCity = async (req, res) => {
    try {
        const result = await City.find({ state_id: req.body.state_id });
        res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.log(error);
    }
}
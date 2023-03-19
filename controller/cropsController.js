const Crops = require("../model/cropsModel");

exports.addCrops = async (req, res) => {
    try {
        const { name, state_id, city_id, soil_id } = req.body;
        const result = await Crops.create({ name, state_id, city_id, soil_id });
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}

exports.getCrops = async (req, res) => {
    try {
        const { state_id, city_id, soil_id } = req.body;
        if (state_id && city_id && soil_id) {
            const result = await Crops.find({ state_id, city_id, soil_id });
            res.status(200).json({ success: true, data: result });
        } else {
            res.status(400).json({ message: "fill all data" });
        }
    } catch (error) {
        console.log(error);
    }
}

exports.getAllCrops = async (req, res) => {
    try {
        const result = await Crops.find();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
    }
}
const State = require('../model/stateModel');

exports.addState = async (req, res) => {
  try {
    const result = await State.create({name:req.body.name});
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
}

exports.getState = async (req, res) => {
  try {
    const result = await State.find();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
}
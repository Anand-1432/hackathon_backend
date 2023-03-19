const express = require('express');
const { addCity, getCity } = require('../controller/cityController');
const router = express.Router();

router.route("/add_city").post(addCity);
router.route("/get_city").post(getCity);

module.exports = router;
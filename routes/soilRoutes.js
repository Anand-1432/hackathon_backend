const express = require('express');
const { addSoil, getSoil } = require('../controller/soilController');
const router = express.Router();

router.route('/add_soil').post(addSoil);
router.route('/get_soil').post(getSoil);

module.exports = router;
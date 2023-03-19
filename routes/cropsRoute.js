const express = require('express');
const { addCrops, getCrops, getAllCrops } = require('../controller/cropsController');
const router = express.Router();

router.route("/add_crops").post(addCrops);
router.route("/get_crops").post(getCrops);
router.route("/get_all_crops").get(getAllCrops);

module.exports = router;
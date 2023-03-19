const express = require('express');
const { addState, getState } = require('../controller/stateController');
const router = express.Router();

router.route('/add_state').post(addState);
router.route('/get_state').get(getState);

module.exports = router;
const express = require('express');
const router = express.Router();

const { getData } = require('../controller/dukcapil');

router.route('/dukcapil').post(getData);

module.exports = router;

const express = require('express');
const { getAllUser } = require('../controller/APIController');

const router = express.Router();

// khai bao route
router.get('/users',getAllUser)

module.exports = router; //export default
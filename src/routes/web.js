const express = require('express')
const {getHomepage,getFledxy, portCreateUsers} = require('../controller/homeController')

const router = express.Router();

// khai bao route
router.get('/',getHomepage)
router.get('/fledxy', getFledxy)
router.post('/create-user',portCreateUsers)

module.exports = router; //export default
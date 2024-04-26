const express = require('express')
const {getHomepage,getFledxy, portCreateUsers, getCreatePage} = require('../controller/homeController')

const router = express.Router();

// khai bao route
router.get('/',getHomepage)
router.get('/fledxy', getFledxy)
router.get('/create', getCreatePage)
router.post('/create-user',portCreateUsers)

module.exports = router; //export default
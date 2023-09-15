const express = require('express')
const router = express.Router()
const { getHomepage, getABC, postCreateUser } = require('../controllers/homeController')

// router.METHOD('/route', hanler)
router.get('/', getHomepage)

router.get('/abc', getABC)

router.post('/create-user', postCreateUser)

module.exports = router; //export default 
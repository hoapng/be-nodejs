const express = require('express');
const { getUsersAPI } = require('../controllers/apiController');
const routerAPI = express.Router()

// router.METHOD('/route', hanler)
routerAPI.get('/users', getUsersAPI)


module.exports = routerAPI; //export default 
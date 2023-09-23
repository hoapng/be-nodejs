const express = require('express');
const { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI, deleteUserAPI } = require('../controllers/apiController');
const routerAPI = express.Router()

// router.METHOD('/route', hanler)
routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', puttUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)


module.exports = routerAPI; //export default 
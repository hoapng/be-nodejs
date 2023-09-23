const express = require('express');
const { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const routerAPI = express.Router()

// router.METHOD('/route', hanler)
routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', puttUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)

routerAPI.post('/files', postUploadMultipleFilesAPI)

module.exports = routerAPI; //export default 
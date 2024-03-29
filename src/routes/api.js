const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  puttUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  puttUpdateCustomer,
  deleteCustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");
const { postCreateProject } = require("../controllers/projectController");
const routerAPI = express.Router();

// router.METHOD('/route', hanler)
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", puttUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomer);
routerAPI.put("/customers", puttUpdateCustomer);
routerAPI.delete("/customers", deleteCustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.post("/projects", postCreateProject);

routerAPI.get("/info", (req, res) => {
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI; //export default

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
const {
  postCreateProject,
  getAllProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  getAllTask,
  postCreateTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
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

routerAPI.get("/projects", getAllProject);
routerAPI.post("/projects", postCreateProject);
routerAPI.put("/projects", updateProject);
routerAPI.delete("/projects", deleteProject);

routerAPI.get("/tasks", getAllTask);
routerAPI.post("/tasks", postCreateTask);
routerAPI.put("/tasks", updateTask);
routerAPI.delete("/tasks", deleteTask);

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

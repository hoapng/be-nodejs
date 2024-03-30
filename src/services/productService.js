const { default: aqp } = require("api-query-params");
const Project = require("../models/project");

module.exports = {
  createProject: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      // console.log(myProject);
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    if (data.type === "ADD-TASKS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.taskArr.length; i++) {
        myProject.tasks.push(data.taskArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId).exec();

      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }

      let newResult = await myProject.save();
      return newResult;
    }
  },
  getProject: async (queryString) => {
    const page = queryString.page;

    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;
    result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();

    return result;
  },
  uProject: async (data) => {
    let result = await Project.updateOne({ id: data.id }, { ...data });
    return result;
  },
  dProject: async (id) => {
    let result = await Project.deleteById(id);
    return result;
  },
};

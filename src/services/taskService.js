const { default: aqp } = require("api-query-params");
const Task = require("../models/task");

module.exports = {
  getTask: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;
    let result = await Task.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();

    return result;
  },
  createTask: async (data) => {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
    return null;
  },

  uTask: async (data) => {
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result;
  },

  dTask: async (id) => {
    let result = await Task.deleteById(id);
    return result;
  },
};

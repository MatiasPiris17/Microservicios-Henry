const { response } = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const model_response = await store[model].get(id);
  response(res, 200, model_response);
};

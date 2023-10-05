const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const model_response = await store[model].list();
  response(res, 200, model_response);
};

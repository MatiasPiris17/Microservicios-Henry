const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { name, birth_year, gender } = req.body;
  if (!name || !birth_year || !gender) return res.status(404).json({ Error: "Faltan datos" });
  const model_response = await store[model].insert(req.body);
  response(res, 200, model_response);
};

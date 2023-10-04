const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { name, birth_year, gender } = req.body;
  if (!name || !birth_year || !gender) return res.status(404).json({ Error: "Faltan datos" });
  const response = await store[model].insert(req.body);
  res.status(200).json(response);
};

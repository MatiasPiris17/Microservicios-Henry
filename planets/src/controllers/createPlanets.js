const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { body } = req
  const planets = await Planet.create(body);
  response(res, 200, planets);
};


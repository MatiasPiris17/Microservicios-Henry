const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await Planet.create();
  response(res, 200, planets);
};

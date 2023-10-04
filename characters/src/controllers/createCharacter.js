const Character = require("../data");
const { response } = require("../utils");

module.exports = async(req, res) => {
  const { body } = req
  const character = await Character.create(body);
  response(res, 200, character);
};
const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { body } = req
  const films = await Film.create(body);
  response(res, 200, films);
};
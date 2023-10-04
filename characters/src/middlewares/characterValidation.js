const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { name, birth_year, gender } = req.body
    if(name, birth_year, gender) return next()
    else throw new ClientError("Faltan datos para crear el personaje", 400)
}
const Planets = require("./planets.json")

module.exports = {
    list: async() => {
        return Planets
    },
    create: async() =>{
        throw Error("Error al crear un nuevo Planets")
    }
}
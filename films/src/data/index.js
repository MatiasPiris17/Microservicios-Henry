
const films = require('./films.json')
const axios = require("axios")

module.exports = {
    list: async() => {
        const response = await axios.get("http://database:8004/Film")
        return response.data
    },
    create: async() =>{
        throw Error("Error al crear un nuevo Film")
    }
}
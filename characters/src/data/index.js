const axios = require("axios")
const characters = require('./characters.json')

module.exports = {
    list: async() => {
        const response = await axios.get("http://database:8004/Character")
        // const response = await axios.get("http://localhost:8004/Character")
        return response.data
    },
    get: async(id) => {
        const response = await axios.get(`http://database:8004/Character/${id}`)
        // const response = await axios.get(`http://localhost:8004/Character/${id}`)
        return response.data
    },
    create: async(data) => {
        const response = await axios.post("http://database:8004/Character", data)
        // const response = await axios.post("http://localhost:8004/Character", data)
        return response.data
        // throw Error("Error al crear un nuevo Character")
    }
}
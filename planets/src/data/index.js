const Planets = require("./planets.json")
const axios = require("axios")

module.exports = {
    list: async() => {
        const response = await axios.get("http://database:8004/Planet")
        // const response = await axios.get(`http://localhost:8004/Planet`)
        return response.data
    },
    get: async(id) => {
        // const response = await axios.get(`http://database:8004/Planet/${id}`)
        const response = await axios.get(`http://localhost:8004/Planet/${id}`)
        return response.data
    },
    create: async(data) => {
        const response = await axios.post("http://database:8004/Planet", data)
        // const response = await axios.post("http://localhost:8004/Character", data)
        return response.data
        // throw Error("Error al crear un nuevo Character")
    }
}
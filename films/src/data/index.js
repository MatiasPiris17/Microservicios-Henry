
const films = require('./films.json')
const axios = require("axios")

module.exports = {
    list: async() => {
        const response = await axios.get("http://database:8004/Film")
        // const response = await axios.get(`http://localhost:8004/Film`)
        return response.data
    },
    get: async(id) => {
        const response = await axios.get(`http://database:8004/Film/${id}`)
        // const response = await axios.get(`http://localhost:8004/Film/${id}`)
        return response.data
    },
    create: async(data) =>{
        const response = await axios.post(`http://database:8004/Film`, data)
        // const response = await axios.post(`http://localhost:8004/Film`, data)
        // throw Error("Error al crear un nuevo Film")
        return response.data
    }
}
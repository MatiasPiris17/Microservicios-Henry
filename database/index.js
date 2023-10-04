const server = require('./src/server')
const PORT = 8004;
// const { Character, Film, Planet } = require("./src/database")

// Planet.list().then(res=> console.log(res[0]))

server.listen(PORT, ()=>{
    console.log(`Database service listening on port ${PORT}`)
})
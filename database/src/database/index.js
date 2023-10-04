const mongoose = require("mongoose");
const { MONGO_DB } = require("../config/envs");

// const conn = mongoose.createConnection("mongodb+srv://demo:demo@atlasdemo.u8ybd99.mongodb.net/star_wars");
const conn = mongoose.createConnection(MONGO_DB);

module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))
}

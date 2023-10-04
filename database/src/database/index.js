const mongoose = require("mongoose");
const { MONGO_DB } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_DB);

const Character = conn.model("Character", require("./schemas/characterSchema"));

Character.find().then((res) => console.log(res));

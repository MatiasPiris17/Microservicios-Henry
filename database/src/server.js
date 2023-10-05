const express = require("express");
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(require("./routes"))

server.all("*", (req, res) => {
  new ClientError("El endpoint no existe", 500);
});

server.use((err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
    });
  });

module.exports = server;
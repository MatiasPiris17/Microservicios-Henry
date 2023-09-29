const controllers = require("../controllers")

const router = require("express").Router()

router.get("/", controllers.getPlanets)

module.exports = router
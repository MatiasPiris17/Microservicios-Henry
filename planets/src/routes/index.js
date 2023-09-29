const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = require("express").Router()

router.get("/", controllers.getPlanets)

router.post("/", middlewares.planetsValidation, controllers.getPlanets)

module.exports = router
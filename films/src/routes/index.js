const middlewares = require("../middlewares")
const controllers = require("../controllers")

const router = require("express").Router()

router.get("/", controllers.getFilms)

router.get("/:id", controllers.getFilmsById)

router.post("/", middlewares.filmsValidation, controllers.createFilm)

module.exports = router
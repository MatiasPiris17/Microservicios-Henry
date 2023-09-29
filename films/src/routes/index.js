// const { Router } = require("express")
const controllers = require("../controllers")

const router = require("express").Router()

router.get("/", controllers.getFilms)

module.exports = router
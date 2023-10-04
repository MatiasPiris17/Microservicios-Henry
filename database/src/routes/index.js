const store = require("../database");
const { validateModel, validateRegister } = require("../middlewares");
const controllers = require("../controllers")

const router = require("express").Router()

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, controllers.createModel);

module.exports = router;

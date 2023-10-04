const { catchedAsync } = require("../utils")

module.exports = {
  getModel: catchedAsync(require("./getModel")),
  createModel: catchedAsync(require("./createModel")),
  getModelById: catchedAsync(require("./getModelById")),
};
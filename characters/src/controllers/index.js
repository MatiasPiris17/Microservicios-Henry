const { catchedAsync } = require("../utils");

module.exports = {
  getCharacter: catchedAsync(require("./getCharacters")),
  getCharacterById: catchedAsync(require("./getCharacterById")),
  createCharacter: catchedAsync(require("./createCharacter"))
};

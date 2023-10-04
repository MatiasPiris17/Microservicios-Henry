module.exports = (req, res, next) => {
  
    const { name, birth_year, gender } = req.body;
    if (name, birth_year, gender) return next();
    else {
      throw Error("Invalid model")
    }
  };
  
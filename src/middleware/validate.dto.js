function validateDTO(ajvValidate) {
  return (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      const { errors } = ajvValidate;
      res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateDTO;

const validateMovie = (req, res, next) => {
  const fields = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];
  const filterFields = fields.filter((field) => !req.body[field]);
  if (filterFields.length > 0) {
    return res.status(400).json({
      message:
        "Completar los siguientes datos para cargar correctamente la película:",
      data: filterFields,
    });
  }
  next();
};

module.exports = { validateMovie };

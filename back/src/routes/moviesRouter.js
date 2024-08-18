const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const { validateMovie } = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllmovies);

moviesRouter.post("/", validateMovie, moviesController.createMovie);

module.exports = { moviesRouter };

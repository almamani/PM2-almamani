const moviesService = require("../services/moviesService");

module.exports = {
  getAllmovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error interno del servidor de Peliculas" });
    }
  },

  createMovie: async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
      const newMovie = await moviesService.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(200).json({
        message: "Película creada con exito",
        data: newMovie,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al crear la película" });
    }
  },
};

const { Movie } = require("../models/Movie");

module.exports = {
  getAllMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};

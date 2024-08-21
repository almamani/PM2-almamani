const tempData = require("./tempData");
const showAllCards = require("./showAllCards");
const { loadSelectYears } = require("./loadSelectYears");
const { handlerAddMovie, handlerResetForm } = require("./createMovie");
const axios = require("axios");

const fetchMovies = async () => {
  try {
    const results = await axios.get("http://localhost:3000/movies");
    showAllCards(results.data);
  } catch (error) {
    alert(
      "No podemos acceder al listado de películas actualizado, por el momento generaremos uno provisorio"
    );
    showAllCards(tempData);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path === "/index.html" || path === "/") {
    fetchMovies();
  } else if (path === "/pages/createMovie.html") {
    loadSelectYears();
    const formMovie = document.getElementById("formMovie");

    if (formMovie) {
      formMovie.addEventListener("submit", handlerAddMovie);
      formMovie.addEventListener("reset", handlerResetForm);
    }
  }
});

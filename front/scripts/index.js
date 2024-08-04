const tempData = require("./tempData");
const showAllCards = require("./showAllCards");
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

fetchMovies();

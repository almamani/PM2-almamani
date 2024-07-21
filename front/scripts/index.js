const tempData = require("./tempData");
const showAllCards = require("./showAllCards");

$.get("https://students-api.up.railway.app/movies")
  .done((results) => {
    showAllCards(results);
  })
  .fail(() => {
    alert(
      "No podemos acceder al listado de películas actualizado, por el momento generaremos uno provisorio"
    );
    showAllCards(tempData);
  });

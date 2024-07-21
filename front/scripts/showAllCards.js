const createCard = require("./createCard");

const showAllCards = (data) => {
  const cardContainer = document.getElementById("peliculas__contenedor");
  const cardsFilms = data.map((film) => createCard(film));
  cardsFilms.forEach((film) => cardContainer.appendChild(film));
};

module.exports = showAllCards;

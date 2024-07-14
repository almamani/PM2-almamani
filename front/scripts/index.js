const crateCard = (film) => {
  const { poster, title, year, genre, director, duration, rate } = film;
  const cardPoster = document.createElement("img");
  const cardTitle = document.createElement("h3");
  const cardSubtitle = document.createElement("p");
  const cardGenre = document.createElement("span");
  const cardDirector = document.createElement("p");
  const cardDuration = document.createElement("p");

  cardPoster.src = poster;
  cardTitle.innerHTML = title;
  cardSubtitle.innerHTML = `<span class="highlight__sky">${genre}</span> `;
  cardDirector.innerHTML = `<b>Director:</b> ${director}`;
  cardDuration.innerHTML = `<b>Duración:</b> ${duration}`;

  cardPoster.className = "peliculas__card__img";
  cardTitle.className = "peliculas__card__title";
  cardSubtitle.className = "peliculas__card__subtitle";
  cardDirector.className = "peliculas__card__text";
  cardDuration.className = "peliculas__card__text";

  const cardFilm = document.createElement("div");
  cardFilm.className = "peliculas__card";

  cardFilm.appendChild(cardPoster);
  cardFilm.appendChild(cardTitle);
  cardFilm.appendChild(cardSubtitle);
  cardFilm.appendChild(cardGenre);
  cardFilm.appendChild(cardDirector);
  cardFilm.appendChild(cardDuration);

  return cardFilm;
};

const showAllCards = (data) => {
  const cardContainer = document.getElementById("peliculas__container");
  cardContainer.innerHTML = "";
  const cardsFilms = data.map((film) => crateCard(film));
  cardsFilms.forEach((film) => cardContainer.appendChild(film));
};

$.get("https://students-api.up.railway.app/movies", (data) => {
  showAllCards(data);
}).fail((jqXHR, textStatus, errorThrown) => {
  console.log(`Error: ${jqXHR.status}`);
  const error = document.createElement("h2");
  error.innerHTML = "Listado de Peliculas Inaccesible Momentáneamente";
  const errorContainer = document.getElementById("container__error");
  errorContainer.appendChild(error);
});

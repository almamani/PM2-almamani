const createCard = (film) => {
  const { poster, title, year, genre, director, duration } = film;
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

module.exports = createCard;

const axios = require("axios");

const handlerAddMovie = async (e) => {
  e.preventDefault();

  //Control de Ingreso Campos de Texto

  const titleMovie = document.getElementById("title");
  const yearMovie = document.getElementById("year");
  const directorMovie = document.getElementById("director");
  const durationMovie = document.getElementById("duration");
  const rateMovie = document.getElementById("rate");
  const posterMovie = document.getElementById("poster");

  const title = titleMovie.value.trim();
  const year = yearMovie.value;
  const director = directorMovie.value.trim();
  const duration = durationMovie.value.trim();
  const rate = rateMovie.value;
  const poster = posterMovie.value.trim();

  if (title === "" || director === "" || duration === "" || poster === "") {
    alert("Hay datos incompletos, ingrese los datos faltantes");
    return;
  }

  //Control Select Años
  if (year === "Seleccione") {
    alert("Debe selecciona un año");
    return;
  }

  //Control Calificacion
  if (rate <= 0 || rate > 10) {
    alert("Ingrese calificación entre 1 y 10");
    return;
  }

  // Control de Seleccion de Géneros
  const selectedGenres = [];
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedGenres.push(checkbox.value);
    }
  });
  if (selectedGenres.length == 0) {
    alert("Debe seleccionar por lo menos un género");
    return;
  }

  const movieData = {
    title: title,
    year: year,
    director: director,
    duration: duration,
    genre: selectedGenres,
    rate: rate,
    poster: poster,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/movies/",
      movieData
    );
    console.log("Película creada correctamente:", response.data);
    alert("Película creada correctamente!");
  } catch (error) {
    console.error("Hubo un error creando la película:", error);
    alert("Error creando la película");
  }

  formMovie.reset();
};

const handlerResetForm = (e) => {
  e.preventDefault();
  const titleMovie = document.getElementById("title");
  const yearMovie = document.getElementById("year");
  const directorMovie = document.getElementById("director");
  const durationMovie = document.getElementById("duration");
  const rateMovie = document.getElementById("rate");
  const posterMovie = document.getElementById("poster");

  titleMovie.value = "";
  yearMovie.value = "Seleccione";
  directorMovie.value = "";
  durationMovie.value = "";
  rateMovie.value = "";
  posterMovie.value = "";

  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

module.exports = {
  handlerAddMovie,
  handlerResetForm,
};

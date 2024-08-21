const loadSelectYears = () => {
  const yearMovie = document.getElementById("year");
  const firstYear = 1895;
  const currentYear = new Date().getFullYear();

  if (yearMovie) {
    for (let year = firstYear; year <= currentYear; year++) {
      let option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearMovie.appendChild(option);
    }
  }
};

module.exports = {
  loadSelectYears,
};

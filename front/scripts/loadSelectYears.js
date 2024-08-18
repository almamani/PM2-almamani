const loadSelectYears = () => {
  const yearMovie = document.getElementById("year");
  const firstYear = 1895;
  const currentYear = 2024;

  for (let year = firstYear; year <= currentYear; year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearMovie.appendChild(option);
  }
};

module.exports = { loadSelectYears };

const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUi = data => {
  const cityDetails = data.cityDetails;
  const cityWeather = data.cityWeather;
  
  //* update the details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `

  //* remove the display none
  card.classList.remove('d-none');
}

const updateCity = async city => {
  //* call of the async functions getCity() and getWeather()
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    cityWeather
  }
}

cityForm.addEventListener('submit', e => {
  //prevent default value
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with the new city value
  updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));

})
const cityForm = document.querySelector("form");

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    cityWeather: cityWeather
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
    .then(data => console.log(data))
    .catch(err => console.log(err));

})
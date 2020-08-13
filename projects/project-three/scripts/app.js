const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUi = data => {
  // default properties
  // const cityDetails = data.cityDetails;
  // const cityWeather = data.cityWeather;

  console.log('😪', data)

  //* destructure properties
  //* get the cityData and the cityWeather from the object data and store the data in two constants, cityDetails and cityWeather
  const {
    cityDetails,
    cityWeather
  } = data;

  //* update the details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `

  // update the weather icon
  let iconSrc = `img/icons/${cityWeather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // update the night and day placeholder
  let timeSrc = cityWeather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

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
  // prevent default value
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with the new city value
  updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));

  //* set local storage
  localStorage.setItem('city', city);
});

//* get the local storage
//* if the local storage has a value, update the ui with that value
if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUi(data))
    .catch(err => console.log(err));
}
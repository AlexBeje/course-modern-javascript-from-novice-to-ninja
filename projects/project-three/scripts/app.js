const key = "foJW0EKqAslB0bemLUMWo47bcPzynnkw";

//get weather information
const getWeather = async city => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${city}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get city information
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  //* ? -> queries are added to the base string
  //* & -> another querie
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity('Lleida')
  .then(city => {
    return getWeather(city.Key)
      .then(data => console.log('👲', data))
  })
  .catch(err => console.log(err))
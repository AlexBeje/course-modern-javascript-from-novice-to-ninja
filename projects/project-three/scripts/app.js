const key = "foJW0EKqAslB0bemLUMWo47bcPzynnkw";

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
  .then(data => console.log(data))
  .catch(err => console.log(err))
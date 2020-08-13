class Forecast {
  constructor() {
    this.key = "foJW0EKqAslB0bemLUMWo47bcPzynnkw";
    this.cityBase = "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.weatherBase = "http://dataservice.accuweather.com/currentconditions/v1/";
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const cityWeather = await this.getWeather(cityDetails.Key);
    return {
      cityDetails,
      cityWeather
    }
  }
  async getCity(city) {
    //* ? -> queries are added to the base string
    //* & -> another querie
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityBase + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(city) {
    const query = `${city}?apikey=${this.key}`;
    const response = await fetch(this.weatherBase + query);
    const data = await response.json();
    return data[0];
  }
}
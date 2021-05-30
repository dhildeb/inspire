export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.location = data.name
    this.icon = data.weather[0].icon
    this.forecast = data.weather[0].description
    this.tempChange = false
  }
  get Template() {
    let celsius = this.temp - 273.15
    let fahrenheit = (this.temp - 273.15) * 9 / 5 + 32
    return `
    <div class="click temp rounded p-2 sections" onclick="app.weathersController.toggleTemp()">
    <h4>${this.tempChange ? celsius.toFixed() + " &#8451" : fahrenheit.toFixed() + " &#8457"}</h4>
    <img class="weather-details" src='http://openweathermap.org/img/wn/${this.icon}@2x.png' />
    <p>${this.location}</p>
    </div>
    `
  }
}

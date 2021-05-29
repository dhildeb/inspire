export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.location = data.name
    this.icon = data.weather[0].icon
    this.forecast = data.weather[0].description
  }

  get Template() {
    return `
    <div>
    <h1>${this.temp}</h1>
    <img src='http://openweathermap.org/img/wn/${this.icon}@2x.png' />
    <p>${this.location}</p>
    </div>
    `
  }

}

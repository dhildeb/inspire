import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
function _draw() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
export class WeathersController {
  constructor() {
    ProxyState.on('weather', _draw)
    weathersService.getWeather()
  }
  toggleTemp() {
    weathersService.toggleTemp()
  }
}
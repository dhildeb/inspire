import { sandBoxApi } from '../Utils/SandboxApi.js'
import { ProxyState } from '../AppState.js'
import { Weather } from "../Models/Weather.js"
class WeathersService {

  async getWeather() {
    let res = await sandBoxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  }
}

export const weathersService = new WeathersService()
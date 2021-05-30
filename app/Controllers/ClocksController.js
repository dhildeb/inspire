import { ProxyState } from "../AppState.js"
import { showTime } from "../Utils/Clock.js"
export class ClocksController {
  constructor() {
    ProxyState.on("standardTime", showTime)
  }
  toggleTime() {
    ProxyState.standardTime = !ProxyState.standardTime
  }

}
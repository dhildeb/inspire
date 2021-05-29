import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _draw() {
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}
export class QuotesController {
  constructor() {
    ProxyState.on("quote", _draw)
    quotesService.getQuotes()
  }
}
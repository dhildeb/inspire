import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandBoxApi } from '../Utils/SandboxApi.js'
class QuotesService {

  async getQuotes() {
    let res = await sandBoxApi.get('quotes')
    console.log(res.data)
    ProxyState.quote = new Quote(res.data)
    console.log(ProxyState.quote)
  }
}

export const quotesService = new QuotesService()
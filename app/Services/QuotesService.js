import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandBoxApi } from '../Utils/SandboxApi.js'
class QuotesService {

  async getQuotes() {
    let res = await sandBoxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }
}

export const quotesService = new QuotesService()
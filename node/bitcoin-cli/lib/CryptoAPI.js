//@ts-check
const axios = require('axios')
require('colors')

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
  }

  async getPriceData(coinOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption,
      })
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      )
      let output = ''
      res.data.forEach((coin) => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
          formatter.format(coin.price).green
        } | Rank: ${coin.rank.blue}\n`
      })
      return output
    } catch (err) {
      handleAPIError(err)
    }
  }
}

const handleAPIError = (err) => {
  if (err.response.status === 401) {
    throw new Error('YOUR KEY INCORRCT')
  } else if (err.response.status === 404) {
    throw new Error('404 error')
  } else {
    throw new Error('NOT GOOOOD')
  }
}

module.exports = CryptoAPI

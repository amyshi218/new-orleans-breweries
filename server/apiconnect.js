const url = 'https://api.openbrewerydb.org/breweries?by_city=new_orleans'
const axios = require('axios')

const getAllBreweries = () => {
  return axios.get(url)
}

module.exports = {
  getAllBreweries
}

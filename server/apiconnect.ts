import { googleAPIKey } from '../config.js'
const axios = require('axios')
const breweryUrl = 'https://api.openbrewerydb.org/breweries?by_city=new_orleans'

const getAllBreweries = () => {
  return axios.get(breweryUrl)
}

const getCoordinates = (street: string, city: string, state: string) => {
  let splitStreet = street.split(' ')

  const addStreet = (splitStreet: Array<string>) => {
    let streetString = ''
    for (let i = 0; i < splitStreet.length - 1; i++) {
      streetString += splitStreet[i] + '+'
    }
    return streetString += splitStreet[splitStreet.length - 1]
  }

  const splitCity = city.split(' ')

  let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addStreet(splitStreet)},+${splitCity[0]}+${splitCity[1]},+${state}&key=${googleAPIKey || process.env.google_api_key}`

  return axios.get(geocodeURL)
}

export {
  getAllBreweries,
  getCoordinates
}

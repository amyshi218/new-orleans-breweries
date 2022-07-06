const axios = require('axios')
const breweryUrl = 'https://api.openbrewerydb.org/breweries?by_city=new_orleans'

const getAllBreweries = () => {
  return axios.get(breweryUrl)
}

const googleAPI = 'AIzaSyBUa2jUKdIV8HlAThHxEkFjq7p5R9s1Slg'

const getCoordinates = async (street, city, state) => {
  let splitStreet = street.split(' ')

  const addStreet = (splitStreet) => {
    let streetString = ''
    for (let i = 0; i < splitStreet.length - 1; i++) {
      streetString += splitStreet[i] + '+'
    }
    // console.log('streeeeet', streetString + splitStreet[splitStreet.length - 1])
    return streetString += splitStreet[splitStreet.length - 1]
  }


  const splitCity = city.split(' ')
  let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addStreet(splitStreet)},+${splitCity[0]}+${splitCity[1]},+${state}&key=${googleAPI}`
  console.log('geo', geocodeURL)

  return await axios.get(geocodeURL)
}

module.exports = {
  getAllBreweries,
  getCoordinates
}

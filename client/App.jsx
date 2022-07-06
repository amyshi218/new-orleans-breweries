import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import api from '../server/apiconnect.js'
import GoogleMapReact from 'google-map-react'
import Pin from './components/Pin.jsx'

import BreweryList from './components/BreweryList.jsx'

export default function App() {
  const [breweries, setBreweries] = useState([])

  const getBreweries = () => {
    api.getAllBreweries()
      .then((data) => setBreweries(data.data))
      .catch((err) => console.log('Error getting breweries', err))
  }

  const defaultProps = {
    center: {
      lat: 29.959021,
      lng: -90.065285
    },
    zoom: 12
  }

  useEffect(() => {
    getBreweries()
  }, [])

  console.log('breweries', breweries)

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1 style={{ margin: 50, color: '#6e4d23', fontFamily: 'Lobster Two, cursive ', fontSize: 80 }} >New Orleans Breweries</h1>
      </header>

      <div style={{ backgroundColor: '#EAD2AC ' }}>
        <BreweryList breweries={breweries} />
      </div>

    </div>
  )
}
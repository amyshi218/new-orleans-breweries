import React, { useState, useEffect } from 'react'
import api from '../server/apiconnect.js'
import List from './components/List.jsx'

export default function App() {
  const [breweries, setBreweries] = useState([])

  const getBreweries = () => {
    api.getAllBreweries()
      .then((data) => setBreweries(data.data))
      .catch((err) => console.log('Error getting breweries', err))
  }

  useEffect(() => {
    getBreweries()
  }, [])
  console.log('breweries', breweries)
  return (
    <div style={{ textAlign: 'center' }}>
      <header><h1 >New Orleans Breweries</h1></header>
      <List breweries={breweries} />
    </div>
  )
}
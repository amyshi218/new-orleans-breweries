import React, { useState, useEffect } from 'react'
import { getAllBreweries } from '../server/apiconnect'
import BreweryList from './components/BreweryList'

export default function App() {
  const [breweries, setBreweries] = useState<Array<Object>>([])

  const getBreweries = () => {
    getAllBreweries()
      .then((data) => setBreweries(data.data))
      .catch((err) => console.log('Error getting breweries', err))
  }

  useEffect(() => {
    getBreweries()
  }, [])

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
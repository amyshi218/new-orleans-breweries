import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Map from './Map'
import { getCoordinates } from '../../server/apiconnect'
import Card from 'react-bootstrap/Card'

export default function Details({ breweries, breweryIdx, setShowDetails }) {
  const [lat, setLat] = useState<String>()
  const [lng, setLng] = useState<String>()

  const getMap = () => {
    if (!breweries[breweryIdx].latitude) {
      getCoordinates(breweries[breweryIdx].street, breweries[breweryIdx].city, breweries[breweryIdx].state)
        .then((data) => {
          setLat(data.data.results[0].geometry.location.lat)
          setLng(data.data.results[0].geometry.location.lng)
        })
        .catch((err) => console.error('Error getting map', err))
    }
  }

  useEffect(() => {
    getMap()
  }, [])

  return (
    <Card style={{ width: '100%', paddingTop: 20, paddingBottom: 40 }}>
      <div style={{ marginBottom: 20, width: 200 }}>
        <Button variant="outline-primary" size="lg" onClick={() => setShowDetails(false)} >Go Back To List</Button>
      </div>
      <Card.Title style={{ color: '#6e4d23' }}>{breweries[breweryIdx].name}</Card.Title>
      <Card.Body>
        <dl>
          <dt>Address</dt>
          <dd>{breweries[breweryIdx].street}</dd>
          <dd>{breweries[breweryIdx].city}, {breweries[breweryIdx].state} {breweries[breweryIdx].postal_code}</dd>
          <dt>Phone Number</dt>
          <dd>{breweries[breweryIdx].phone}</dd>
          <dt>Website</dt>
          <dd><a href={breweries[breweryIdx].website_url} target="_blank">{breweries[breweryIdx].website_url}</a></dd>
          <dt>Brewery Type</dt>
          <dd>{breweries[breweryIdx].brewery_type}</dd>
        </dl>
        <Map latitude={lat || breweries[breweryIdx].latitude} longitude={lng || breweries[breweryIdx].longitude} ></Map>
      </Card.Body>
    </Card>
  )
}
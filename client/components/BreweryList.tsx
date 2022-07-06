import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Details from './Details'

export default function BreweryList({ breweries }) {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [breweryIdx, setBreweryIdx] = useState<Number>()

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      {!showDetails ? <ListGroup style={{ marginBottom: 30 }} >
        {breweries.map((brewery: any, idx: number) => (
          <ListGroup.Item action as="li" key={idx} onClick={() => { setShowDetails(true); setBreweryIdx(idx) }}>
            <dl>
              <dt><h4 style={{ color: '#6e4d23' }}>{brewery.name}</h4></dt>
              <dl><b>Brewery Type: </b>{brewery.brewery_type}</dl>
              <dl><em>{brewery.street}</em></dl>
              <dl><em>{brewery.city}, {brewery.state} {brewery.postal_code}</em></dl>
              <dt><a href={brewery.website_url} target="_blank">{brewery.website_url}</a></dt>
            </dl>
          </ListGroup.Item>
        ))}
      </ListGroup>
        :
        <Details breweries={breweries} breweryIdx={breweryIdx} setShowDetails={setShowDetails} />
      }
    </div >
  )
}


import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Pin from './Pin'
// import { googleAPIKey } from '../../config.js'

export default function Map({ latitude, longitude }) {

  const defaultProps = {
    center: {
      lat: Number(latitude),
      lng: Number(longitude)
    },
    zoom: 15
  }

  return (
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.google_api_key }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Pin lat={latitude} lng={longitude}></Pin>
      </GoogleMapReact>
    </div >
  )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

export default function Pin({ lat, lng }) {
  const latitude: Object = {
    lat
  }
  const longitude: Object = {
    lng
  }
  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faMapPin} size="3x" {...latitude} {...longitude} />
    </div>
  )
}
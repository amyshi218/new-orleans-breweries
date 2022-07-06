import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

export default function Pin({ lat, lng }) {

  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faMapPin} size="3x" lat={lat} lng={lng} />
    </div>
  )
}
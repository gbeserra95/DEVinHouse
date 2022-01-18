import React from 'react'
import PropTypes from 'prop-types'
import { formateDate } from '../../utils/dateUtils'

function Temperature({ city, country, temperature, weather }) {
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {city}, {country}
        </div>
        <div className="date">{formateDate(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(temperature)}°C</div>
        <div className="weather">{weather}</div>
      </div>
    </div>
  )
}

Temperature.prototypepropTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
}

export default Temperature

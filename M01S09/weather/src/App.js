import './App.css'
import Temperature from './components/Temperature'
import { useState } from 'react'

const api = {
  key: '',
  base: 'https://api.openweathermap.org/data/2.5/',
  language: 'pt_br',
  units: 'metric'
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async e => {
    if (e.key === 'Enter') {
      const response = await fetch(
        `${api.base}weather?q=${query}&units=${api.units}&lang=${api.language}&APPID=${api.key}`
      )
      const myJson = await response.json()
      console.log(myJson)
      setWeather(myJson)
      setQuery('')
    }
  }

  return (
    <div
      className={
        weather.main ? (weather.main.temp > 16 ? 'app warm' : 'app') : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Pesquisar..."
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' && (
          <Temperature
            city={weather.name}
            country={weather.sys.country}
            temperature={weather.main.temp}
            weather={weather.weather[0].main}
            //2:45:00
          />
        )}
      </main>
    </div>
  )
}

export default App

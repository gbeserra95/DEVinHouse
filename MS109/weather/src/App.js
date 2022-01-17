import './App.css'
import Temperature from './components/Temperature'
import { useState } from 'react'

const api = {
  key: 'aca47f15695cd58e099a5d0aa14fa926',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async e => {
    if (e.key === 'Enter') {
      const response = await fetch(
        `${api.base}weather?q=${query}&units-metric&APPID=${api.key}`
      )
      const myJson = await response.json()
      console.log(myJson)
      setWeather(myJson)
      setQuery('')
    }
  }

  return (
    <div className="app">
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
          />
        )}
      </main>
    </div>
  )
}

export default App

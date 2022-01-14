import './App.css'
import Temperature from './components/Temperature'

const api = {
  key: 'aca47f15695cd58e099a5d0aa14fa926',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  //2:24:00

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Pesquisar..."
          />
        </div>
        <Temperature />
      </main>
    </div>
  )
}

export default App

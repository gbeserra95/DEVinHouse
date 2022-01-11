import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  //Query params
  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch('http://localhost:3333/cards?_limit=20')
      const data = await response.json()
      setCards(data)
    }

    handleGetCard()
  }, [])

  return (
    <div>
      <h1>Total de cards: {cards.length}</h1>
      <div className="container">
        {cards.map(card => (
          <Card
            image={card.card_images[0].image_url_small}
            name={card.name}
            type={card.type}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default App

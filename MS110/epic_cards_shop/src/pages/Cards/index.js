import { useEffect, useState, useRef, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import { CartContext } from '../../contexts/Cart'

const Cards = () => {
  const params = useParams()

  const inputRef = useRef(null)

  const { addItem } = useContext(CartContext)

  const [cards, setCards] = useState([])

  //Query params
  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch(
        `http://localhost:3333/cards?race=${params.category}`
      )
      const data = await response.json()
      setCards(data)
    }

    handleGetCard()
  }, [params.category])

  return (
    <div>
      <input placeholder="Pesquisa" ref={inputRef} />
      <Link to="/about">Ir para a página sobre</Link>
      <h1>Total de cards: {cards.length}</h1>
      <div className="container">
        {cards.map(card => (
          <div>
            <Card
              key={card.id}
              image={card.card_images[0].image_url_small}
              name={card.name}
              type={card.type}
            />
            <button
              onClick={() => {
                addItem(card)
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards

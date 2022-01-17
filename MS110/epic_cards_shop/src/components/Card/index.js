import { useContext } from 'react'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../contexts/Cart'
import { FavoritesContext } from '../../contexts/Favorites'

const Card = ({ data }) => {
  const { addItem } = useContext(CartContext)
  const { addFavorite } = useContext(FavoritesContext)

  return (
    <div className="item-card">
      <img
        className="item-card-photo"
        src={data.card_images[0].image_url_small}
        alt="Foto da carta"
      />
      <span className="item-card-name">{data.name} </span>
      <span>{data.type}</span>
      <div className="footer-card">
        <FaCartPlus
          onClick={() => {
            addItem(data)
          }}
        />
        <FaHeart
          onClick={() => {
            addFavorite(data.name)
          }}
        />
      </div>
    </div>
  )
}

export default Card

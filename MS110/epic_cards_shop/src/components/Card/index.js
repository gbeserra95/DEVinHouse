const Card = ({
  image,
  name,
  type

}) => {
  return(
    <div className="item-card">
    <img
      className="item-card-photo"
      src={image}
      alt="Foto da carta"
    />
    <span className="item-card-name">{name} </span>
    <span>{type}</span>
  </div>
  )
}

export default Card
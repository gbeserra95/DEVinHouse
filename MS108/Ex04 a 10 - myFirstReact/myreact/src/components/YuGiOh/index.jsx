const starsQuantity = (n) => {
  let stars = []
  for(let i = 0; i < n; i++){
    stars.push(
      <div className="card-star"></div>
    )
  }
  return stars
}

export const YuGiOh = (
    {
      cardName,
      rareness,
      photo,
      type,
      description,
      atack,
      defense
    }
 ) => {
   const stars = starsQuantity(rareness)
   return(
      <div className="card">
        <div className="card-header">
          <div className="card-name">
            {cardName}
          </div>
          <div className="card-symbol"></div>
        </div>
        <div className = "card-stars">
          {stars}
        </div>
        <div className="card-image" style={{backgroundImage: `url(${photo})`}}></div>
        <div className="card-text">
          <div className="card-type">[{type}]</div>
          <div className="card-description">{description}</div>
        </div>
        <div className="card-footer">ATK/{atack} DEF/{defense}</div>
      </div>
   )
  }
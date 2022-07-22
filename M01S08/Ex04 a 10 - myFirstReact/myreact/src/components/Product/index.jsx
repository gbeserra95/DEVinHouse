const Product = props => {
  return (
    <div className="product-container">
      <div 
        className="product-image"
        style={{backgroundImage: `url(${props.url})`}}>
      </div>
      <div className="product-description">
        {props.description}
      </div>
      <div className="product-price">
        {props.price}
      </div>
    </div>
  )
}

export default Product
const Button = ({title, color, bg}) => {
  return (
    <div 
      style={{color: color, background: bg}}
      className="myButton">
        {title}
    </div>
  )
}

export default Button
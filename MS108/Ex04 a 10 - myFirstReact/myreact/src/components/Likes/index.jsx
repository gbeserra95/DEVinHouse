const Likes = props => {
  return (
    <div className="likes-text">
      {`${props.users[0]} and ${props.users.length - 1} others liked this`}
    </div>
  )
}

export default Likes
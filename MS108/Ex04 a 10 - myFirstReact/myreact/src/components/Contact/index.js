const Contact = props => {
  return (
    <div className="contact-container">
      <div
        className="user-photo"
        style={{ backgroundImage: `url(${props.url})` }}
      ></div>
      <div className="user-info">
        <div className="user-name contact-text">{props.name}</div>
        <div className="user-description contact-text">{props.description}</div>
      </div>
    </div>
  )
}

export default Contact

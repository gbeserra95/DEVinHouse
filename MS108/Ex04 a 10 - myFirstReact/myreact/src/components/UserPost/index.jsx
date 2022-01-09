import Contact from "../Contact"
import ButtonHeart from "../ButtonHeart"
import ButtonMore from "../ButtonMore"
import ButtonShare from "../ButtonShare"
import Likes from "../Likes"

const UserPost = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <Contact url={props.userPhoto} name={props.userName} description={props.postTime}></Contact>
        <ButtonMore></ButtonMore>
      </div>
      <div style={{backgroundImage: `url(${props.url})`}}className="post-image"></div>
      <div className="post-footer">
        <div className="post-like">
          <ButtonHeart></ButtonHeart>
          <ButtonShare></ButtonShare>
        </div>
        <Likes users={['_gabrielbeserra', 'gabbcaigara', '_lufernandes']}></Likes>
      </div>
    </div>
  )
}

export default UserPost
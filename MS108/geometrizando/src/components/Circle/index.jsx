import CapsLock from '../CapsLock'

const Circle = ({background, title}) => {
  return (
    <div>
        <CapsLock title={title}/>
      <div
        style= {{background: background}} 
        className="circle">
      </div>
    </div>
  )
}

export default Circle
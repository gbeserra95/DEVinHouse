import CapsLock from '../CapsLock'

function Square(props) {
  return (
    <div>
        <CapsLock title={props.title}/>
      <div
        style= {{background: props.background, width: props.width}} 
        className="square">
        </div>
    </div>
  )
}

export default Square
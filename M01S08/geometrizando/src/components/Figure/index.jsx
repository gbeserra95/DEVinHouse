import PropTypes from 'prop-types'

import CapsLock from '../CapsLock'
import Square from '../Square'
import Circle from '../Circle'
import Rectangle from '../Rectangle'
import Triangle from '../Triangle'

const Figure = ({
  type,
  title,
  bg
}) => {
  return(
    <>
      <CapsLock>{title}</CapsLock>
      {type === 'square' && (
        <Square title = {title} background = {bg} />
      )}
      {type === 'circle' && (
        <Circle title = {title} background = {bg} />
      )}
      {type === 'rectangle' && (
        <Rectangle title = {title} background = {bg} />
      )}
      {type === 'triangle' && (
        <Triangle title = {title} background = {bg} />
      )}
    </>
  )
}

Figure.propTypes = {
  type: PropTypes.oneOf(['square', 'circle','rectangle','triangle']),
  bg: PropTypes.string
}

export default Figure
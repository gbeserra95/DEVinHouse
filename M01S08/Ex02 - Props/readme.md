## Props

**O que são as props de um componente no ReactJs? Cite um exemplo de declaração de componente com suas props.**

Props são as propriedades que esse componente irá receber e exibir quando for renderizado.

No exemplo **geometrizando** foi criado o componente _Figure_, que pode receber como propriedades o **tipo**, **cor** e **texto** que será exibido quando rederizado. Essas propriedades são conhecidas como **props**.

Abaixo está o exemplo da criação do componente figura.

```JavaScript
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
```

Agora, perceba a chamada do componente Figure + Props:

```JavaScript
  import './App.css'
  import Figure from './components/Figure'

  function App() {
    return (
      <>
        <Figure type="square" title="Quadrado" bg="blue" />
        <Figure type="circle" title="Círculo" bg="yellow" />
        <Figure type="rectangle" title="Retângulo" bg="green" />
        <Figure type="triangle" title="Triângulo" bg="red" />
      </>
    )
  }

  export default App
```

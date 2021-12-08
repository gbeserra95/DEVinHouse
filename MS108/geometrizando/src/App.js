import './App.css'
import Square from './components/Square'
import Circle from './components/Circle'

function App() {
  return (
    <>
      <Square title="Quadrado" width="100px" />
      <Square title="Quadrado Cinza" width="150px" background="gray" />
      <Square title="Quadrado com largura" width="200px" />
      <Circle title="Círculo" />
    </>
  )
}

export default App

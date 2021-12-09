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

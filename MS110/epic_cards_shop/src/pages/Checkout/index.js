import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import Container from '../../components/Container'
import { Form } from './styles'

function Checkout() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    let currentErrors = []

    if (!email) {
      currentErrors = [...currentErrors, 'Email é obrigatório!']
    }

    if (!password) {
      currentErrors = [...currentErrors, 'Senha é obrigatória!']
    }

    setErrors(currentErrors)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {errors.map(item => (
          <p>{item}</p>
        ))}
        <Input
          label="Email"
          type="text"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
          placeholder="Digite seu nome"
        />
        <br />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
          placeholder="Digite sua senha"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}

export default Checkout

import { Link } from 'react-router-dom'
import { CategoryItem } from './styles'
import Container from '../../components/Container'

const TYPES = [
  'Aqua',
  'Beast-Warrior',
  'Cyberse',
  'Dinosaur',
  'Dragon',
  'Fairy',
  'Fish',
  'Insect',
  'Machine',
  'Plant',
  'Rock',
  'Warrior',
  'Spellcaster'
]

const Home = () => {
  return (
    <Container>
      {TYPES.map(type => (
        <CategoryItem key="type">
          <Link to={`/cards/${type}`}>{type}</Link>
        </CategoryItem>
      ))}
    </Container>
  )
}

export default Home

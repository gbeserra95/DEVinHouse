import React from 'react'
import { Link } from 'react-router-dom'

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
    <div className="container-app">
      {TYPES.map(type => (
        <div key="type" className="category-item">
          <Link to={`/cards/${type}`}>{type}</Link>
        </div>
      ))}
    </div>
  )
}

export default Home

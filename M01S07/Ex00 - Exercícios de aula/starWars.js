const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male'
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male'
  },
  {
    name: 'Yoda',
    height: '66',
    mass: '17',
    hair_color: 'white',
    skin_color: 'green',
    eye_color: 'brown',
    birth_year: '896BBY',
    gender: 'male'
  },
  {
    name: 'Palpatine',
    height: '170',
    mass: '75',
    hair_color: 'grey',
    skin_color: 'pale',
    eye_color: 'yellow',
    birth_year: '82BBY',
    gender: 'male'
  }
]

const noGender = characters
  .filter(character => character.gender === 'n/a')
  .map(character => character.name)
console.log(noGender)

const lessThan30 = characters.find(character => character.mass < 30).name
console.log(lessThan30)

const avgHeight =
  characters
    .map(character => parseInt(character.height))
    .reduce((total, height) => total + height) / characters.length
console.log(avgHeight)

const avgMass =
  characters
    .map(character => parseInt(character.mass))
    .reduce((total, mass) => total + mass) / characters.length
console.log(avgMass)

const firstFemale = characters.find(
  character => character.gender === 'female'
).name
console.log(firstFemale)

const greaterThan150 = characters
  .filter(character => character.height > 150)
  .map(character => character.name)
console.log(greaterThan150)

const avgHeightMaleMassLessThan50 = characters
  .filter(character => character.gender === 'male')
  .filter(character => character.mass > 50)
  .map(character => parseInt(character.height))

console.log(
  avgHeightMaleMassLessThan50.reduce((total, height) => total + height) /
    avgHeightMaleMassLessThan50.length
)

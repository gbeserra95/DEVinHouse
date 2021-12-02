const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    population: 38928341,
    area: 652230.0
  },
  {
    name: 'Brazil',
    region: 'Americas',
    population: 212559409,
    area: 8515767.0
  },
  {
    name: 'China',
    region: 'Asia',
    population: 1402112000,
    area: 9640011.0
  },
  {
    name: 'Egypt',
    region: 'Africa',
    population: 102334403,
    area: 1002450.0
  },
  {
    name: 'Estonia',
    region: 'Europe',
    population: 1331057,
    area: 45227.0
  },
  {
    name: 'India',
    region: 'Asia',
    population: 1380004385,
    area: 3287590.0
  },
  {
    name: 'Malawi',
    region: 'Africa',
    population: 19129955,
    area: 118484.0
  },
  {
    name: 'Poland',
    region: 'Europe',
    population: 37950802,
    area: 312679.0
  },
  {
    name: 'Romania',
    region: 'Europe',
    population: 19286123,
    area: 238391.0
  }
]

const countriesOver100M = countries
  .filter(country => country.population > 100000000)
  .map(country => country.name)

const nameAndRegion = countries.map(country => {
  return { name: country.name, region: country.region }
})

const isEuropean = countries.every(country => country.region === 'Europe')

const europeAverage = Math.ceil(
  countries
    .filter(country => country.region === 'Europe')
    .map(country => country.population)
    .reduce((total, population) => total + population) / countries.length
)

const firstAfrican = countries.find(country => country.region === 'Africa')

const asianCountries = countries.filter(country => country.region === 'Asia')

const areaSum = countries
  .map(country => country.area)
  .reduce((total, area) => total + area)

console.log(countriesOver100M)
console.log(nameAndRegion)
console.log(isEuropean)
console.log(europeAverage)
console.log(firstAfrican)
console.log(asianCountries)
console.log(areaSum)

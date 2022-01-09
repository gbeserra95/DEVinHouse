import './App.css'
import Button from './components/Button'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Button title="Get started" color="white" bg="lightgreen"></Button>
      <Contact
        url="https://scontent.fbnu4-1.fna.fbcdn.net/v/t39.30808-6/245254501_4339412166148344_8377739007130343269_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZNvc3ht9rx09JfhRC2wWUu1NmsFw33FC7U2awXDfcUBw_w0Dr71IRK05EQ3QJSLccuU5C3xZShF36ANwMvEiA&_nc_ohc=EG2nyh8LaLMAX98FKJd&tn=UCGIngO7pG3_B6cG&_nc_ht=scontent.fbnu4-1.fna&oh=00_AT-qjQ7L36h-IvUp6JR65Bv8S9W9UKS7w6TyKXJzX4FZ3A&oe=61E03012"
        name="Gabriel Beserra"
        description="Software Developer"
      ></Contact>
      <Contact
        url="https://scontent.fbnu4-1.fna.fbcdn.net/v/t39.30808-6/270649181_4663989593720856_1640201293227254493_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEJDzjHK_7zQwnl8zVbfmHDN1K7pEKJglo3UrukQomCWimbRCGexkP9vRBXzaxigySl63I48XUT8_L912BreYE3&_nc_ohc=kKaMDblvUHoAX9d1HRL&tn=UCGIngO7pG3_B6cG&_nc_ht=scontent.fbnu4-1.fna&oh=00_AT9DKuC5891V6SP2VsW6b4cV0zWK1bJ1hSrAp1mK3cp7QQ&oe=61E007DA"
        name="Gabrielle Caigara"
        description="Student"
      ></Contact>
    </>
  )
}

export default App

import './App.css'
import Button from './components/Button'
import Contact from './components/Contact'
import UserPost from './components/UserPost'
import Product from './components/Product'
import Table from './components/Table'

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
      <UserPost
        userPhoto="https://scontent.fbnu4-1.fna.fbcdn.net/v/t39.30808-6/245254501_4339412166148344_8377739007130343269_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZNvc3ht9rx09JfhRC2wWUu1NmsFw33FC7U2awXDfcUBw_w0Dr71IRK05EQ3QJSLccuU5C3xZShF36ANwMvEiA&_nc_ohc=EG2nyh8LaLMAX98FKJd&tn=UCGIngO7pG3_B6cG&_nc_ht=scontent.fbnu4-1.fna&oh=00_AT-qjQ7L36h-IvUp6JR65Bv8S9W9UKS7w6TyKXJzX4FZ3A&oe=61E03012"
        userName="Gabriel Beserra"
        postTime="5 min"
        url="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ></UserPost>
      <Product
        url="https://www.manual.com.br/_next/image?url=%2F_next%2Fstatic%2Fsrc%2Fassets%2Fimages%2Fshampoo-58208790a9b079042e85dbec578ab80f.png&w=640&q=75"
        description="Manual | Shampoo Antiqueda | Saw Palmetto e Cafeína"
        price="R$23,66"
      ></Product>
      <Table
        title="My React Table"
        description="Hello, world! This is my first React Table Component."
        columns={['event', 'deviceId', 'comment']}
        data={[
          {
            event: 'Event#01',
            deviceId: '000 001',
            comment: 'First event'
          },
          {
            event: 'Event#02',
            deviceId: '000 002',
            comment: 'Second event'
          }
        ]}
      ></Table>
    </>
  )
}

export default App

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import candlesData from './data.js'

function App() {
  let [candles, setCandles] = useState(candlesData);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Candle.SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
        <Row>
          {
            candles.map((data, i) =>
            <Product candles={candles[i]} num={i}/>
            )
          }
        </Row>
    </div>
  );
}

const Product = (props) => {
  return(
    <Col sm className='products'>
      <img src={process.env.PUBLIC_URL +`/Candle${props.num+1}.jpg`} width='100%' />
      <h4>{props.candles.title}</h4>
      <p>{props.candles.price.toLocaleString()}</p>
    </Col>
  )
}

export default App;

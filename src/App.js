import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import candlesData from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import  Detail  from './routes/detail';
import  About  from './routes/about';
import Company from './routes/company';
import Location from './routes/location';

function App() {
  let [candles, setCandles] = useState(candlesData);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=>{navigate('/')}}>Candle.SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navLink' onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link className='navLink' onClick={()=>{navigate('/detail')}}>Products</Nav.Link>
            <Nav.Link className='navLink' href="/about">Company</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
            <Row>
              {candles.map((data, i) =>
                <Product candles={candles[i]} num={i}/>
                )}
            </Row>
            </>
        } />
        <Route path="/detail" element={<Detail candlesData={candlesData} />} />
        <Route path="/about" element={<About />}> 
          <Route path="company" element={<Company />}/> {/* /about/company */}
          <Route path="location" element={<Location />}/> {/* /about/location */}
        </Route>
        <Route path="*" element={<div style={{ marginTop:'200px' }}>존재하지 않는 페이지 입니다.</div>} />
      </Routes>
    </div>
  )
}

const Product = (props) => {
  return(
    <Col sm className='products'>
      <img src={process.env.PUBLIC_URL +`/Candle${props.num+1}.jpg`} width='100%' />
      <h4>{props.candles.title}</h4>
      <p>{props.candles.price.toLocaleString()}원</p>
    </Col>
  )
}

export default App;

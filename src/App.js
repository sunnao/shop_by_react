import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import candlesData from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Btn, Detail } from "./routes/detail";
import About from "./routes/about";
import Company from "./routes/company";
import Location from "./routes/location";
import axios from "axios";

function App() {
  let [candles, setCandles] = useState(candlesData);
  let navigate = useNavigate();
  let [btnCount, setBtnCount] = useState(2);
  let [btnShow, setBtnShow] = useState(true);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Candle.SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className="navLink"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navLink"
              onClick={() => {
                navigate("/detail");
              }}
            >
              Products
            </Nav.Link>
            <Nav.Link className="navLink" href="/about">
              Company
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Row>
                {candles.map((data, i) => (
                  <Product candles={candles[i]} num={i} key={i} />
                ))}
              </Row>
              {btnShow === true ? (
                <Btn
                  onClick={() => {
                    setBtnCount(btnCount + 1);

                    axios
                      .get("https://codingapple1.github.io/shop/data" + `${btnCount}.json`)
                      .then(result => {
                        // setCandles(candles.concat(result.data))
                        let copy = [...candles, ...result.data];
                        setCandles(copy);
                        if (btnCount > 2) {
                          setBtnShow(false);
                        }
                      })
                      .catch(result => {
                        console.log("요청 실패");
                      });
                  }}
                >
                  더보기
                </Btn>
              ) : null}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail candles={candles} />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} /> {/* /about/company */}
          <Route path="location" element={<Location />} /> {/* /about/location */}
        </Route>
        <Route path="*" element={<div style={{ marginTop: "200px" }}>존재하지 않는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

const Product = props => {
  return (
    <Col sm={4} xs={12} className="products">
      <Link className="productsLink" to={/detail/ + `${props.num}`}>
        <img src={process.env.PUBLIC_URL + `/Candle${props.num + 1}.jpg`} width="100%" />
        <h4>{props.candles.title}</h4>
        <p>{props.candles.price.toLocaleString()}원</p>
      </Link>
    </Col>
  );
};

export default App;

import React from 'react'
import Carding from '../components/Carding'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'reactstrap'
import NavbarDark from '../components/Navbar'
import Jumbo from '../components/Jumbo'

export default () => (
  <div className="bg-light">
    <>
      <div className="bg-dark">
        <NavbarDark />
        <Jumbo />
      </div>
    </>
    <Container>
      <Row>
        <Carding />
      </Row>
    </Container>
  </div>
)

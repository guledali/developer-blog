import React from 'react'
import Carding from '../components/Carding'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'reactstrap'
import NavbarDark from '../components/Navbar'
import Jumbo from '../components/Jumbo'

const AllPage = () => {
  return (
    <div className="bg-light">
      <NavbarDark />
      <Jumbo />
      <Container>
        <Row>
          <Carding />
        </Row>
      </Container>
    </div>
  )
}

export default AllPage

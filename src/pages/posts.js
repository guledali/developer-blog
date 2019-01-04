import React from 'react'
import Carding from '../components/Carding'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'reactstrap'
import NavbarDark from '../components/Navbar'

const AllPage = () => {
  return (
    <div>
      <NavbarDark />
      <Container>
        <Row>
          <Carding />
        </Row>
      </Container>
    </div>
  )
}

export default AllPage

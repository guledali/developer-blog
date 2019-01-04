import React from 'react'
import Carding from '../components/Carding'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'reactstrap'

const AllPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Carding />
        </Row>
      </Container>
    </div>
  )
}

export default AllPage

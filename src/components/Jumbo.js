import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Jumbo = () => {
  return (
    <Jumbotron fluid style={{ background: '#3b3c38' }}>
      <Container fluid>
        <h1 style={{ color: '#f5da55' }} className="display-3 font-weight-bold">
          Developer blog
        </h1>
        <h2 className="display-4 text-light">Learn more about your stack</h2>
      </Container>
    </Jumbotron>
  )
}

export default Jumbo

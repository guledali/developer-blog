import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid className="bg-secondary">
        <Container fluid>
          <h1 className="display-3 font-weight-bold text-warning">
            Developer blog
          </h1>
          <h2 className="display-4 text-light">Learn more about your stack</h2>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo

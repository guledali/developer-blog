import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron, Container } from 'reactstrap'

storiesOf(`Components`, module).add(`Jumbo`, () => (
  <Jumbotron fluid style={{ background: '#3b3c38' }}>
    <Container fluid>
      <h1 style={{ color: '#f5da55' }} className="display-3 font-weight-bold">
        Developer blog
      </h1>
      <h2 className="display-4 text-light">Learn more about your stack</h2>
    </Container>
  </Jumbotron>
))

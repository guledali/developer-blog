import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron, Container } from 'reactstrap'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)
stories.add(`Jumbo`, () => (
  <Jumbotron fluid style={{ background: '#3b3c38' }}>
    <Container fluid>
      <h1 style={{ color: '#f5da55' }} className="display-3 font-weight-bold">
        {text('Heading', 'Developer blog')}
      </h1>
      <h2 className="display-4 text-light">{text('Subtitle', 'Learn more about your stac')}</h2>
    </Container>
  </Jumbotron>
)).addDecorator(withKnobs)

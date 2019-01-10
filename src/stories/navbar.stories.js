import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar } from 'reactstrap'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)
stories.add(`NavbarDark`, () => (
  <Navbar style={{ background: '#323330' }} className="shadow-sm">
    <Link
      to="/"
      style={{ color: '#f5da55', textDecoration: 'none' }}
      className="navbar-brand"
    >
      {text('Text', 'Developer blog')}
    </Link>
  </Navbar>
)).addDecorator(withKnobs)

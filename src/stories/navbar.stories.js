import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar } from 'reactstrap'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf(`Components`, module).add(`NavbarDark`, () => (
  <Navbar style={{ background: '#323330' }} className="shadow-sm">
    <Link
      to="/"
      style={{ color: '#f5da55', textDecoration: 'none' }}
      className="navbar-brand"
    >
      Developer blog
    </Link>
  </Navbar>
))

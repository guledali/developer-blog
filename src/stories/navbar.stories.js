import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

storiesOf(`Components`, module).add(`NavbarDark`, () => (
  <Navbar style={{ background: '#323330' }} className="shadow-sm">
    <NavbarBrand style={{ color: '#f5da55' }}>
      <Link to="/" style={{ color: '#f5da55', textDecoration: 'none' }}>
        Developer blog
      </Link>
    </NavbarBrand>
  </Navbar>
))

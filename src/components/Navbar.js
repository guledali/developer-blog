import React from 'react'
import { Navbar } from 'reactstrap'
import { Link } from 'gatsby'

const NavbarDark = props => {
  return (
    <Navbar style={{ background: '#323330' }} className="shadow-sm">
      <Link
        to="/"
        style={{ color: '#f5da55', textDecoration: 'none' }}
        className="navbar-brand"
      >
        Developer blog
      </Link>
    </Navbar>
  )
}

export default NavbarDark

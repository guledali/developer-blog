import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'gatsby'

const NavbarDark = props => {
  return (
    <Navbar style={{ background: '#323330' }} className="shadow-sm">
      <NavbarBrand style={{ color: '#f5da55' }}>
        <Link to="/posts" style={{ color: '#f5da55', textDecoration: 'none' }}>
          Developer blog
        </Link>
      </NavbarBrand>
    </Navbar>
  )
}

export default NavbarDark

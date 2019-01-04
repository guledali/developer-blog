import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavbarDark = props => {
  return (
    <Navbar style={{ background: '#323330' }} className="shadow-sm">
      <NavbarBrand className="text-warning">Developer blog</NavbarBrand>
    </Navbar>
  )
}

export default NavbarDark

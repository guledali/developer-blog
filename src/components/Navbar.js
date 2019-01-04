import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavbarDark = props => {
  return (
    <Navbar color="dark" light>
      <NavbarBrand className="text-warning">Developer blog</NavbarBrand>
    </Navbar>
  )
}

export default NavbarDark

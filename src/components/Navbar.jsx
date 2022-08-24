import React from 'react'
import { Navbar as Nav } from 'flowbite-react'
import Logo from "../img/university/AIHE_logo.png"
const Navbar = () => {
  return (
    <>
    <Nav
  fluid={true}
  rounded={true}>

  <Nav.Brand href="/">
        <img
        src={Logo}
        className="mr-3 h-6 sm:h-9"
        alt=" company Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
       Digital Guide Nepal
        </span>
  </Nav.Brand>

  <Nav.Toggle />
  
  <Nav.Collapse>
    <Nav.Link
      href="/Navs"
      active={true}
    >
      Home
    </Nav.Link>
    <Nav.Link href="/Navs">
      About
    </Nav.Link>
    <Nav.Link href="/Navs">
      Services
    </Nav.Link>
    <Nav.Link href="/Navs" className='text-5xl'>
      Pricing
    </Nav.Link>
    <Nav.Link href="/Navs">
      Contact
    </Nav.Link>
  </Nav.Collapse>
</Nav>
      
    </>
  )
}

export default Navbar
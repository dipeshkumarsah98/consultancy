import React from 'react'
import { Navbar as Nav } from 'flowbite-react'
import Logo from "../img/university/AIHE_logo.png"
const Navbar = () => {
  return (
    <>
    <Nav
  fluid={true}
  rounded={true}>

  <Nav.Brand href="#">
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
      href="#"
      active={true}
    >
      Home
    </Nav.Link>
    <Nav.Link href="#">
      About
    </Nav.Link>
    <Nav.Link href="#">
      Services
    </Nav.Link>
    <Nav.Link href="#" className='text-5xl'>
      Pricing
    </Nav.Link>
    <Nav.Link href="#">
      Contact
    </Nav.Link>
  </Nav.Collapse>
</Nav>
      
    </>
  )
}

export default Navbar
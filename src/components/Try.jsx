import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import Logo from "../img/university/ECA.png"

export const Try = () => {
  return (
    <div>
        <Navbar
          fluid={true}
          rounded={true}
        >
  <Navbar.Brand href="/">
    <img
      src={Logo}
      className="mr-3 h-6 sm:h-9"
      alt="DGN"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Digital Guide Nepal
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button >
      Login
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={false} 
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/">
      Services
    </Navbar.Link>
    <Navbar.Link href="/about">
      About
    </Navbar.Link>
    <Navbar.Link href="/contact">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

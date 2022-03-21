import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavComponent () {
    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Dev.Heath</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/blogPage">Blog</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        </div>
    )
}

export default NavComponent
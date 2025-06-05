import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header'>
      
       <Navbar collapseOnSelect expand="xl" className="headerNav">
        <Navbar.Brand href="#home"><i class="fi fi-brands-apple"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="#">iPhone</Nav.Link>
            <Nav.Link href="#">iPad</Nav.Link>
            <Nav.Link href="#">Mac</Nav.Link>
            <Nav.Link href="#">Watch</Nav.Link>
            <Nav.Link href="#">AirPods</Nav.Link>
            <Nav.Link href="#">Vision</Nav.Link>
            <Nav.Link href="#">TV 및 홈</Nav.Link>
            <Nav.Link href="#">엔터테인먼트</Nav.Link>
            <Nav.Link href="#">액세서리</Nav.Link>
            <Nav.Link href="#">고객지원</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets"><i class="fi fi-rr-search"></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fi fi-rs-user"></i></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"><i class="fi fi-rc-shopping-bag"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default Header
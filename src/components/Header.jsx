import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 61);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed' : ''}`}>
      
       <Navbar collapseOnSelect expand="xl" className="headerNav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand><Link as={Link} to="/" style={{textDecoration: "none"}}><i className="fi fi-brands-apple"></i></Link></Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link as={Link} to="/iPhone" style={{textDecoration: "none"}}>iPhone</Nav.Link>
            <Nav.Link as={Link} to="/iPad" style={{textDecoration: "none"}}>iPad</Nav.Link>
            <Nav.Link as={Link} to="/Mac" style={{textDecoration: "none"}}>Mac</Nav.Link>
            <Nav.Link as={Link} to="/Watch" style={{textDecoration: "none"}}>Watch</Nav.Link>
            <Nav.Link as={Link} to="/AirPods" style={{textDecoration: "none"}}>AirPods</Nav.Link>
            <Nav.Link as={Link} to="/Vision" style={{textDecoration: "none"}}>Vision</Nav.Link>
            <Nav.Link as={Link} to="/TV&Home" style={{textDecoration: "none"}}>TV 및 홈</Nav.Link>
            <Nav.Link as={Link} to="/Enter" style={{textDecoration: "none"}}>엔터테인먼트</Nav.Link>
            <Nav.Link as={Link} to="/Acce" style={{textDecoration: "none"}}>액세서리</Nav.Link>
            <Nav.Link as={Link} to="/Service" style={{textDecoration: "none"}}>고객지원</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link><i className="fi fi-rr-search"></i></Nav.Link>
            <Nav.Link as={Link} to="/Login" style={{textDecoration: "none"}} ><i className="fi fi-rs-user"></i></Nav.Link>
            <Nav.Link  as={Link} to="/Cart" style={{textDecoration: "none"}} eventKey={2}><i className="fi fi-rc-shopping-bag"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed' : ''}`}>
      
       <Navbar collapseOnSelect expand="xl" className="headerNav">
        <Navbar.Brand><Link as={Link} to="/" style={{textDecoration: "none"}}><i className="fi fi-brands-apple"></i></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link as={Link} to="/detail" style={{ textDecoration: "none" }}>iPhone</Nav.Link>
            <Nav.Link>iPad</Nav.Link>
            <Nav.Link>Mac</Nav.Link>
            <Nav.Link>Watch</Nav.Link>
            <Nav.Link>AirPods</Nav.Link>
            <Nav.Link>Vision</Nav.Link>
            <Nav.Link>TV 및 홈</Nav.Link>
            <Nav.Link>엔터테인먼트</Nav.Link>
            <Nav.Link>액세서리</Nav.Link>
            <Nav.Link>고객지원</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link><i className="fi fi-rr-search"></i></Nav.Link>
            <Nav.Link ><i className="fi fi-rs-user"></i></Nav.Link>
            <Nav.Link eventKey={2}><i className="fi fi-rc-shopping-bag"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default Header
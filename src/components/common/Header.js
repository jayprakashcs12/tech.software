import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { colorsName, NavRoutes } from '../../assets/data/data';

const Header = ({ selectColor, setSelectColor }) => {

    let [expand, setExpand] = useState(false),

    handleChange = (hex) => {
        setSelectColor(hex);
        setExpand(false);
    };

    return (
        <Navbar expanded={expand} expand="lg" collapseOnSelect sticky="top" className="pro-navbar main-navbar">
            <Container>
                <Navbar.Brand>
                    <Link className="links title-link" to="/">Software</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(!expand)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {NavRoutes.map((link, i) => (
                            <NavLink key={i} to={link.navTo} className="links nav-link" onClick={() => setExpand(false)}>
                                {link.navText}
                            </NavLink>
                        ))}
                    </Nav>
                    <Nav>
                        <NavDropdown title={<div className="circle-dropDown title-dropDown" style={{ backgroundColor: selectColor }}></div>} 
                            id="collasible-nav-dropdown" className="nav-link">
                            {colorsName.map((color, index) => (
                                <NavDropdown.Item key={index} onClick={() => handleChange(color.hex)}>
                                    <div className="circle-dropDown" style={{ backgroundColor: color.hex }}></div>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
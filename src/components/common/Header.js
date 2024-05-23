import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavRoutes, colorsName } from '../../assets/data/data';
import { NavLink } from 'react-router-dom';

function Header({ setColor }) {

    let [expand, setExpand] = useState(false),
    [selectedColor, setSelectedColor] = useState('Blue'),
    handleColorChange = (value) => {
        setSelectedColor(value);
        setExpand(false);
        setColor(value);
    };

    useEffect(() => {
        setColor(selectedColor);
    }, []);

    return (
        <Navbar expanded={expand} expand="lg" collapseOnSelect sticky="top" className="pro-navbar main-navbar">
            <Container className="nav-content" onClick={e => e.stopPropagation()}>
                <Navbar.Brand>
                    <h3>Software</h3>
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
                        <NavDropdown title={selectedColor} id="collasible-nav-dropdown" className={`nav-link bg-${selectedColor}`}>
                            {colorsName.map((color) => (
                                <NavDropdown.Item key={color.value} onClick={() => handleColorChange(color.value)}>
                                    {color.name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
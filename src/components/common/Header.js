import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavRoutes, colorsName } from '../../assets/data/data';
import { NavLink } from 'react-router-dom';

function Header({ setColor }) {

    const [selectedColor, setSelectedColor] = useState('Blue');
    const [expand, setExpand] = useState(false);

    const handleColorChange = (value) => {
        setSelectedColor(value);
        setColor(value);
    };

    useEffect(() => {
        setColor(selectedColor);
    }, []);

    const navLinkClassName = `pro-button links nav-link`;
    const navStyle = { fontWeight: "normal" };

    return (
        <Navbar expanded={expand} expand="lg" collapseOnSelect sticky="top" className={`pro-navbar main-navbar`}>
            <Container className="nav-content" onClick={e => e.stopPropagation()}>
                <Navbar.Brand>
                    <h3>Software</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" onClick={() => setExpand(!expand)}>
                    <Nav className="me-auto">
                        {NavRoutes.map((link, i) => (
                            <NavLink key={i} to={link.navTo} style={navStyle} className={navLinkClassName} onClick={() => setExpand(false)}>
                                {link.navText}
                            </NavLink>
                        ))}
                    </Nav>
                    <Nav>
                        <NavDropdown title={selectedColor} id="collasible-nav-dropdown" className={`nav-link bg-${selectedColor}`}>
                            {colorsName.map((color) => (
                                <NavDropdown.Item key={color.value} onClick={() => handleColorChange(color.value)}>
                                    {color.value}
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
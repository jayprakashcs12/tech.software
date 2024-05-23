import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavRoutes } from '../../assets/data/data';
import { NavLink } from 'react-router-dom';

function Header({ setColor }) {

    let colors = [
        { value: 'Red', name: 'Red' }, { value: 'Blue', name: 'Blue' }, { value: 'Green', name: 'Green' }, { value: 'Orange', name: 'Orange' },
        { value: 'Purple', name: 'Purple' }, { value: 'Cyan', name: 'Cyan' }, { value: 'Magenta', name: 'Magenta' }, { value: 'Pink', name: 'Pink' },
        { value: 'Teal', name: 'Teal' }
    ];

    colors.sort((a, b) => a.name.localeCompare(b.name));

    let [selectedColor, setSelectedColor] = useState('Blue');

    let handleColorChange = (value) => {
        setSelectedColor(value);
        setColor(value);
    };

    useEffect(() => {
        setColor('Blue');
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className={`pro-navbar bg-${selectedColor}`}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {NavRoutes.map((link, i) => (
                            <NavLink key={i} to={link.navTo} className="nav-link" activeClassName="active">
                                {link.navText}
                            </NavLink>
                        ))}
                    </Nav>
                    <Nav>
                        <NavDropdown title={selectedColor} id="collasible-nav-dropdown" className={`nav-link bg-${selectedColor}`}>
                            {colors.map((color) => (
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
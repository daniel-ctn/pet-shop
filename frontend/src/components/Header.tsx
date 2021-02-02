import React from 'react'
import {faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Nav, Navbar} from 'react-bootstrap';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Pet Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart}
                                                                    className="mr-1"/>Cart</Nav.Link>
                            <Nav.Link href="/login"><FontAwesomeIcon icon={faUser}
                                                                     className="mr-1"/>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;


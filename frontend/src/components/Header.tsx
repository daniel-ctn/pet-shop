import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
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
                    <LinkContainer to="/">
                        <Navbar.Brand>Puppy Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><FontAwesomeIcon icon={faShoppingCart}
                                                           className="mr-2"/>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link><FontAwesomeIcon icon={faUser}
                                                           className="mr-2"/>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;


import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../state/store";
import { logout } from '../state/actionCreators/userActionCreator';

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state: RootState) => state.user)

    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
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
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={() => dispatch(logout())}>
                                        Sign Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link><FontAwesomeIcon icon={faUser} className="mr-2"/>
                                        Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;


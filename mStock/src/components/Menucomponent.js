import React, { useState } from 'react';
import AuthenticationService from './AuthenticationService'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Menucomponent() {
    let userLoggedin = false
    const [isOpen, setIsOpen] = useState(false);
    //const [userLoggedin, setUserLoggedin] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    userLoggedin = AuthenticationService.isUserLoggedin()
    //setUserLoggedin(AuthenticationService.isUserLoggedin())
    console.log(userLoggedin)

    return (
        <div>
            <Navbar color="dark" light expand="md" className="navbar navbar-dark bg-dark">
                <NavbarBrand href="/">mStock App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="companies-list">Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            {AuthenticationService.isUserLoggedin() && <NavLink href="watchlist">Watch List</NavLink>}
                        </NavItem>
                        <NavItem>
                            {AuthenticationService.isUserLoggedin() && <NavLink href="performance">Compare Performance</NavLink>}
                        </NavItem>
                        <NavItem>
                            {AuthenticationService.isUserLoggedin() && <NavLink href="#" onClick={AuthenticationService.logout}>Logout</NavLink>}
                            {!AuthenticationService.isUserLoggedin() && <NavLink href="login" >Login</NavLink>}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Menucomponent

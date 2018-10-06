import React from 'react';
import { NavLink } from 'react-router-dom'
import { PageHeader, Navbar, Nav, NavItem } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <PageHeader style={{ textAlign: 'center' }}>
                Web App
            </PageHeader>
            <Navbar>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>
                            <NavLink to="/register" activeClassName='highlight' exact={true}>Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/dashboard" activeClassName='highlight' exact={true}>Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/help" activeClassName='highlight'>Help</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
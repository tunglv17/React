import React, { useEffect, useState } from 'react'
import {
    NavLink, useHistory
} from 'react-router-dom';
import { isAuthenticated, signOut } from '../../auth';
import { useLocation } from 'react-router-dom'
const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/user/dashboard" activeClassName="active">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/allproduct" activeClassName="active"> Watches </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeClassName="active"> About </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" activeClassName="active">Contact Us</NavLink>
                </li>
                {!isLogged && (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin" activeClassName="active">SignIn</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup" activeClassName="active">SignUp</NavLink>
                        </li>
                    </>
                )}
                {isLogged && (
                    <li className="nav-item">
                        <a className="nav-link" activeClassName="active"
                            style={{ cursor: 'pointer' }}
                            onClick={() => signOut(() => {
                                setIsLogged(false);
                                history.push('/')
                            })}
                        >Signout</a>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Nav

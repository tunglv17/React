import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/dashboard">
                                <span data-feather="home" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/product">
                                <span data-feather="home" />
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/category">
                                <span data-feather="home" />
                                Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/dashboard">
                                <span data-feather="home" />
                                User
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/dashboard">
                                <span data-feather="home" />
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" aria-current="page" to="/admin/contact">
                                <span data-feather="home" />
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>


    )
}

export default Sidebar

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav from './Nav';
const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <NavLink className="navbar-brand" to="/">
            <span>
            aTufng 
        </span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav />
            <div className="user_option-box">
              <a href="/user/dashboard">
                <i className="fa fa-user" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-cart-plus" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

  )
}
export default Header
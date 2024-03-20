import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid px-0">
                <Link className="navbar-brand fw-bold" to="/">Dananz</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <Link className={`nav-link ${location.pathname === "/" && 'active'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`nav-link ${location.pathname === "/aboutus" && 'active'}`} to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`nav-link ${location.pathname === "/services" && 'active'}`} to="/services">Services</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`nav-link ${location.pathname === "/ourteams" && 'active'}`} to="/ourteams">Our Teams</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <button type="button" className="nav-btn" onClick={() => navigate("/contactus")}>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
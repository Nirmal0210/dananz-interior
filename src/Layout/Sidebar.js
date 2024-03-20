import React from 'react'
import { useState } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
const Sidebar = (props) => {
    const [areMenusOpen, setAreMenusOpen] = useState(false)
    const closeAllMenusOnEsc = (e) => {
        e = e || window.event;
        console.log(e)

        if (e.key !== 'Escape' || e.keyCode !== 27) {
            setAreMenusOpen(false);
        }
    };
    return (
        <Menu {...props} customOnKeyDown={closeAllMenusOnEsc} isOpen={areMenusOpen}>
            <Link className="menu-item" to="/">
                Home
            </Link>

            <Link className="menu-item" to="/aboutus">
                About Us
            </Link>

            <Link className="menu-item" to="/services">
                Services
            </Link>

            <Link className="menu-item" to="/ourteams">
                Our Teams
            </Link>
            <Link className="menu-item" to="/contactus">
                Contact Us
            </Link>
        </Menu>
    )
}

export default Sidebar
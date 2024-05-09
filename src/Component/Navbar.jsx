import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <React.Fragment>
        <div className="header">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to= "/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">Work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Navbar;
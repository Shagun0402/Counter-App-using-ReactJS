import React, { Component } from 'react';
// Stateless functional component
// cannot use lifecycle hooks in stateless fucntional components
console.log("NavBar- Rendered");
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar { " "} 
                    <span className="badge bg-secondary rounded-pill "> 
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};
 
export default NavBar;
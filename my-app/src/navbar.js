import {Link}from 'react-router-dom';
import React from "react";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>MaheersBlog</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to="/create">TechUp</Link>
                <Link to="/view">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
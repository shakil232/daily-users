
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="container">
         <nav>
             <a href="home">Home</a>
             <a href="Review"> Selected Review </a>
             <a href="manage"> Manage</a>
         </nav>
        </div>
    );
};

export default Header;
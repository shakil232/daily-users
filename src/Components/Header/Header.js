
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = (props) => {
    console.log(props.head)
    return (
        <div className="container">
            <nav>
                <a className="logo" href="">Developer-Hunt</a>
                <a href="home">Home</a>
                <a href="Review"> Selected Review </a>
                <a href="manage"> Manage</a>
               
                <input className="search-inp" type="text" placeholder="" />  
                    
                     <FontAwesomeIcon className="icon" icon={faSearch} />
                 
                 <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </nav>

        </div>


    );
};

export default Header;
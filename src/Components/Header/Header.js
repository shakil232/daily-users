
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    
    return (
        <div className="container">
         <nav>
             <a href="">Daily-Users</a>
             <a href="home">Home</a>
             <a href="Review"> Selected Review </a>
             <a href="manage"> Manage</a>
              
                  <input type="text" placeholder=""/>
                  <button> Search</button>
              
             <FontAwesomeIcon  icon={faCartPlus}/> 
             
         </nav>
         
        </div>
 
        
    );
};

export default Header;
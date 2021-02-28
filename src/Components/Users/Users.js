
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlusCircle ,faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import './Users.css'

const Users = (props) => {
    
    // const handelSelectUsers = props. handelSelectUsers;

    const { image, name,salary } = props.user;

    return (
        <div className="users-container">

           <div className="profile">
               <div>
               <img src={image} alt=""/> 
               <h4 className="name"> <i>{name}</i></h4>
               <h4 className="salary"><i>Salary: ${salary}</i></h4>
               </div>

               <div className="buttons">
                   <button className="button"> <i> <FontAwesomeIcon icon={faInfoCircle} /> click to info</i> </button>
                   <button 
                      className="button"
                      onClick={()=> props.handelSelectUsers(props.user)}
                    > 
                      <i> 
                         <FontAwesomeIcon icon={faPlusCircle} />
                       click to select</i>  
                    </button>
               </div>
               
               <div>
                  <p>
                      <FontAwesomeIcon className="star" icon={faStar}/> 
                      <FontAwesomeIcon className="star" icon={faStar}/>
                       <FontAwesomeIcon className="star" icon={faStar}/> 
                       <FontAwesomeIcon className="star" icon={faStar}/> 
                        <FontAwesomeIcon className="star-half" icon={faStarHalfAlt}/>
                    </p>
               </div>
           </div>
        </div>
    );
};

export default Users;
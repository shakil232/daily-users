
import React from 'react';
import './Users.css'
const Users = (props) => {
    const { image, name,salary } = props.user
    return (
        <div className="users-container">
           <div className="profile">
               <div>
               <img src={image} alt=""/> 
               <h4 className="name"> <i>{name}</i></h4>
               <h4 className="salary"><i>Salary: ${salary}</i></h4>
               </div>
               <div className="buttons">
               <button className="button"> <i>click to details</i> </button>
               <button className="button"> <i>click to select</i>  </button>
               </div>
           </div>
        </div>
    );
};

export default Users;
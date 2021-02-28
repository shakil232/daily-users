
import React, { useEffect, useState } from 'react';
import './Display.css'
import fakeData from '../../fakeData/Data.json'
import Users from '../Users/Users';
import Cart from '../Cart/Cart';

const Display = () => {

    const [ users , setUsers ] = useState([])
    useEffect( ()=>{
        setUsers(fakeData)
    },[])

    return (
        <div className="display-container">

            <div className="users">
             {
               users.map(user => <Users user={user} Key={user.country}></Users>)
             }
            </div>

            <div>
               <Cart></Cart>
            </div>
                 
        </div>
    );
};

export default Display;
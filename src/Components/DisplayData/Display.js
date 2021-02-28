
import React, { useEffect, useState } from 'react';
import './Display.css'
import fakeData from '../../fakeData/Data.json'
import Users from '../Users/Users';
import Cart from '../Cart/Cart';







const Display = () => {

    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
  

    useEffect(() => {
        setUsers(fakeData);

    }, []);

    const handelSelectUsers = (user) => {
        const totalSelect = [...cart, user];
        setCart(totalSelect);
    };
    


    

    return (
        <div className="display-container">

            <div className="users">
                {
                    users.map(user => <Users user={user} Key={user.country} handelSelectUsers={handelSelectUsers} ></Users>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
               
            </div>
              
        </div>
    );
};

export default Display;
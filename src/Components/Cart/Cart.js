
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    const totalEarn = cart.reduce((sum, addSum) => sum + addSum.yearlyEarn, 0)
    return (
        <div className="cart-container">

            <div className="review">
                <h2 className="head"> Select Review </h2>
                <h3> Total select- <span className="person-color">{cart.length}</span> Person</h3>
            </div>

            <div>
                <h3 className="earn">Total Yearly-earn- {totalEarn}</h3>
                <button className="select-btn">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                    <i> selected review </i></button>
            </div>

            <div >
                <form className="sing-up" action="">
                    <p className="sing">sing-up</p>
                    <input className="email" type="text" name="" id="" placeholder="Email or Phone" />
                    <br />
                    <input className="pass" type="password" name="" id="" placeholder=" Password" />
                    <br />
                    <button className="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Cart;
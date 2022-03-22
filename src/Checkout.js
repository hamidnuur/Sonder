import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  
    return (
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
  
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your shopping Basket</h2>
  
            {/* {BasketItem */}
            {/* {BasketItem */}
            {/* {BasketItem */}
            {/* {BasketItem */}
          </div>
        </div>
  
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;
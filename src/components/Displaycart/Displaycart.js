import React, { useEffect, useState } from "react";
import './Displaycart.css'

const Displaycart = () => {
  
  const [displaycart , setDisplaycart] = useState(0);

  useEffect(()=>{

  const getLocalValue = localStorage.getItem('product__qun__value');
  const parseValue = JSON.parse(getLocalValue);
  const getValue = Object.values(parseValue);
  // console.log(getValue)
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const itemTotal = getValue.reduce(reducer,0);
  setDisplaycart(itemTotal);
   
  
  },[])
  return (
    <div className="cart-section">
     
      <h4 className="cart"><span id ='cart-s'> Cart {displaycart}</span></h4>
    </div>
  );
};

export default Displaycart;

import React, { useEffect, useState } from 'react';

import Products from '../Product/Products';
import './Allproducts.css'

const Allproducts = () => {
    
    const [allproducts, setAllproducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then( data => setAllproducts(data))
    },[])
    return (
        
        <div className="main">
            
        <div className="row row-cols-1  row-cols-md-3 g-4">
            {allproducts.map(product => <Products product ={product} key={product.id}></Products>)}
        </div>
        </div>
    );
};

export default Allproducts;
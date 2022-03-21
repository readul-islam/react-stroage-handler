import React from 'react';
import { addLocalStorage } from '../Addtolocalstroge/Addlocalstroge';
import { removeStroge } from '../RemoveStroge/Removestroge';
import './Products.css'

const Products = (props) => {
  const {title,price,description,image,id}=props.product;

  const handler =() =>{
        addLocalStorage(id)
  }
  const removeHandler =() =>{
    removeStroge(id)
  }
    return (
        
            <div className="col">
    <div className="card ">
      <img src={image} className="card-img-top w-50 mx-auto h-50" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p  className="card-text mt-5">{description.slice(0,150)}</p>
        <div className ="d-flex justify-content-around mt-5">
         <button onClick={handler} className="btn btn-warning  ">Add Cart</button>
         <button onClick={removeHandler} className="btn btn-warning  ">Delete Cart</button>
         <h3 className="price">${price}</h3>
        </div>
      </div>
      
    </div>
  </div>
        
    )
};

export default Products;
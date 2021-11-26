import React from 'react'
import './Product.css'

function Product({item}) {
  
  return (

    item ?
    <div className="product">
       
      <div className="product__info">
        <p>{item.title}</p>
        <p className="product__price"> 
        <small>$</small>     
        <strong>{item.price}</strong>
        </p> 
        {/* <div className="product__rating">

        </div> */}
     </div>
        <img src={item.image} alt={item.info}/>
        <button>Add to Basket</button>
      </div> 
    : <p> no product</p>
  )
}

export default Product

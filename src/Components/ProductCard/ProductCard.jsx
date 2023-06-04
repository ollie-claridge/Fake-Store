import React, { useContext } from 'react'
import './ProductCard.css'
import {IoHeartCircleSharp,IoHeartCircle} from "react-icons/io5";
import { CartContext } from '../../Context/ContextCart';

function ProductCard({product}) {
  //var for icon
  const inCart = false;
  // acsess the globel context
  // global context uses {} not []
  const {cart, addProduct} = useContext(CartContext)
  return (
    <div className="Card">
          <div className="product-image">
          {
            inCart?
            <IoHeartCircle className='full-heart' />
            :
            <IoHeartCircleSharp className='full-heart' />
          }
      <img src={product?.image}/>
      </div>
        <div className="product-info">
    <h2>{product?.title}</h2>
    <p>{product?.price}€</p>

    <a href={`/details/${product?.id}`}>See Product</a>
       </div>
        </div>
  )
}

export default ProductCard  
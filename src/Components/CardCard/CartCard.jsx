import React, { useContext } from 'react'
import './CartCard.css'
import { BsTrash } from "react-icons/bs";
import { CartContext } from '../../Context/ContextCart';
import { Link } from 'react-router-dom'

function CartCard() {


    //this is used for global state 
    // {} not []
    const {removeProduct, lowCartCount} = useContext(CartContext)


  return (
    <div className="cart-card">
        <div className="cart-card-img">
            <img src={ProductCard.image}/>
        </div>
        <Link to={'/details/${product.id}'}className='cart-card-title'>{product.title}</Link>
        <p className='cart-card-price'>{product.price}</p>
        <p className='cart-card-quantity'>1</p>
        {
            <BsTrash className='bin-icon'onClick={()=>{removeProduct(product.id);lowCartCount()}} />
        }
    </div>
  )
}

export default CartCard
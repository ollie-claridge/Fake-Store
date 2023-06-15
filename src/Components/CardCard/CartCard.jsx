import React, { useContext } from 'react'
import './CartCard.css'
import { BsTrash } from "react-icons/bs";
import { CartContext } from '../../Context/ContextCart';
import { Link } from 'react-router-dom'

function CartCard({checkoutProduct}) {


    //this is used for global state 
    // {} not []
    const {removeProduct, product} = useContext(CartContext) 

    
console.log(product)
  return (
    //I am making a new car using the same info called for the product card, just arranged differrntly 
    <div className="cart-card">
            <img src={checkoutProduct?.image}/>
        <Link to={'/details/${product.id}'}className='cart-card-title'>{checkoutProduct?.title}</Link>
        <p className='cart-card-price'>{checkoutProduct?.price}</p>
        <p className='cart-card-quantity'>1</p>
        {
          //This bin icon will be used to remove any unwanted products from the shopping cart
            <BsTrash className='bin-icon'onClick={()=>{removeProduct(checkoutProduct.id)}} />
        }
    </div>
  )
}

export default CartCard
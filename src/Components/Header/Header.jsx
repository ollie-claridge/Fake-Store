import React, { useContext } from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { CartContext } from '../../Context/ContextCart';
//use {} not []


function Header() {
  const {cart, setCart} = useContext(CartContext)
  return (
    
        <>
      
        <div className="nav">
        <h1>Fake Store</h1>
        <div className="Links">
        <AiOutlineShoppingCart className='basketIcon'/>
        </div>
        </div>

         </>
         
      
   
  )
}


export default Header

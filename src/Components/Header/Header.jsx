import React, { useContext } from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { CartContext } from '../../Context/ContextCart';
import { FaCircle } from "react-icons/fa";
import {Link} from 'react-router-dom'

//use {} not []


function Header() {
  const {cart} = useContext(CartContext)
  return (
    
        <>
      
        <div className="nav">
        <Link to="/"><h1>Fake Store</h1></Link>
        <div className="Links">
        <Link to="/checkout"><AiOutlineShoppingCart className='basketIcon'/> <FaCircle className='basketCircle'/><p className='item-number'>{cart.length}</p></Link>
        </div>
        </div>

         </>
         
      
   
  )
}


export default Header

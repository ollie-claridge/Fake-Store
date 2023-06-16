import React, {useContext, useState} from 'react'
import './Checkout.css'
import { CartContext } from '../../Context/ContextCart'
import {ImBin} from "react-icons/im";
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard';
import axios from 'axios';
import CartCard from '../../Components/CardCard/CartCard';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '300px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    alignContent: 'center',
    textAlign: 'center',
  },
}

Modal.setAppElement(document.getElementById('root'));


function Checkout() {
 
    
  
    //I'll context to create a global state to store the content of the cart
  
  const {cart} = useContext(CartContext)


    //This state is used to keep the modal from being open until the onlclick opens it

    const [isOpen, setIsOpen] = useState(false); // Modal state

    const [total, setTotal] = React.useState(0)
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };


   React.useEffect(

    ()=>{

      let total = 0;
      //I need a for loop to check the current cart arrays prices and add them up
      for(let i = 0; i < cart.length; i++){

      //add the total
      total = total += cart[i].price;
      }
      setTotal(total)//this updates the total state
    

    },[cart]
    )
  

///


  return (
    <div className='checkout'>
    <div className="checkout-container">
        <div className="checkout-headers">
            <h2 className='cart-heading-item'>Item</h2>
            <h2 className='cart-heading-title'></h2>
            <h2 className='cart-heading'>Price</h2>
            <h2 className='cart-heading'>Quantity</h2>
            <h2 className='cart-heading'>Remove</h2>
        </div>
      <div className='checkout-items'>
          {
         cart.map(item=><CartCard key={item?.id} checkoutProduct={item}/>)

          }
      </div>

          <div className='total-price'>
          <h2>Total: {total}€</h2>
        </div>
        <button className="submit-btn"onClick={openModal}>Submit</button>
        
        </div>


        <Modal
        isOpen={isOpen}
        // onRequestClose={closeModal}
        style={customStyles}//styles are ^^^^^
        contentLabel="Submit"
      >
        <div className='modal-box'>
        <div className="modal-words">
        <h2>Your order was sucsessful!</h2>
        <h2>Check your email for order confirmation. Thank you for shopping with Fake Store!</h2>
        </div>
        <a href="/" className="modal-btn" onClick={closeModal}>
          Return to Main Page
        </a>
        </div>
      </Modal>
        
    </div>
  )
}

export default Checkout
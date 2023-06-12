import React from 'react'
import './Footer.css'
import Modal from 'react-modal' 
// import Link from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // display: 'flex',
    // justifyContent: 'spaceAround',
    // alignContent: 'center',
  },
}

Modal.setAppElement(document.getElementById('root'));

function Footer() {
  //create state to control the model
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="Footer">
    <button className ="contact-btn" onClick={()=>setIsOpen(true)}>Contact Us</button>
    <Modal
        isOpen={isOpen}
        // onRequestClose={closeModal}
        style={customStyles}//styles are ^^^^^
        contentLabel="Contact Us"
      >
        <h2>Your order was sucsessful!</h2>
        <h2>Check your email for order confirmation. Thank you for shopping with Fake Store!</h2>
        <button>Return to Main Page</button>
        {/* <button onClick={closeModal}>close</button> */}
        <form>

        </form>
      </Modal>
    </div>
  )
}

export default Footer
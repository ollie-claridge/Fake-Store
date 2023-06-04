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
        <h2>hello</h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default Footer
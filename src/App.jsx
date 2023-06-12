import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/Product-Details/ProductDetails'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './Context/ContextCart'
import Checkout from './Pages/Checkout/Checkout'

function App() {

  return(
    <BrowserRouter>
      <>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/details/:productId' element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer />
        </CartContextProvider>
      </>
    </BrowserRouter>
      /////BrowserRouter isn't set up properly, watch the video
  )

}

export default App

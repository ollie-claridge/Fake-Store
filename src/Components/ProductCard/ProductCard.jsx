import React, { useContext } from 'react'
import './ProductCard.css'
import {FaHeart, FaRegHeart} from "react-icons/fa";
import { CartContext } from '../../Context/ContextCart';

function ProductCard({product}) {
  //var for icon

  // acsess the globel context
  // global context uses {} not []
  const {cart, addProduct, removeProduct, lowCartCount, addCartCount} = useContext(CartContext)


  //Create a varible for the add to cart hearts
  const [addToCart, setAddToCart] = React.useState(false)

  React.useEffect(
    ()=>{
      console.log("update")
      // need to find out if the product is in cart

      setAddToCart(cart.find(item=> item.id === product.id))
      // if undefined it will be false

    }, [cart, product.id]
  )

  return (
    <div className="Card">
          <div className="product-image">
          {
            addToCart?
            <FaHeart className='full-heart' onClick={()=>{removeProduct(product.id);lowCartCount()}} />
            :
            <FaRegHeart className='full-heart' onClick={()=>{addProduct(product);addCartCount()}} />
          }
      <img src={product?.image}/>
      </div>
        <div className="product-info">
    <h2>{product?.title}</h2>
    <p>{product?.price}€</p>

    <a href={`/details/${product?.id}`} className='card-btn'>See Product</a> /*///Cant change the border?///*/
    
       </div>
        </div>
  )
}

export default ProductCard  
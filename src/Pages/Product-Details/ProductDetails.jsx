import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../Context/ContextCart'


function ProductDetails() {

    //This page will show the details of the product from the ID found inside the URL

    const {productId} = useParams()

    React.useEffect(
        ()=>{
            console.log("works")
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                console.log(res)
                setDetails(res.data)
            })
            .catch(err => console.log(err))
        }, [] //Need this to so it only runs when page loads
    )

    //Creating a state to hold to product details data

    const [details, setDetails] = React.useState('')

  return (
    <div className="details-container">
        <div className="detailsCard">
            <div className='card-img'>
            <img src = {details.image}/>
            </div>

        <div className='card-info'>

            <h2>{details.title}</h2>
            <p>{details.price}€</p>
            <h3>Description:</h3>
            <p>{details.description}</p>
            <button className='details-btn' onClick={()=>{addProduct(product)}}>Add to Card</button>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
import React, {useEffect, useState, useContext} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { CartContext } from '../../Context/ContextCart'

 

function Homepage() {
        // Creating state to store the API data
    const [products, setProducts] = useState([])
        // Creat a state to store the catagories data
    const [categories, setCategories] = useState([])
    // Creating a state for filtering through catagories


// I will need to show the products and the categories when the page loads
    useEffect(
        ()=>{
            console.log('loaded')
            //Make an API call the get the product data
            axios.get(`https://fakestoreapi.com/products`).then(res=>{
            console.log(res.data)
            // I have the data now what do I do with it
            // Store it in state
            setProducts(res.data)
            //Console logged to see if I was getting correct data
        })
        .catch(err=>console.log(err))
        // Make API call to call the categories 
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(
            res=>{
                console.log(res.data) 
                // I have the data, now to store it
                setCategories(res.data)
            }
        )
        .catch(err=>console.log(err))
        //Making an API to call all the products

           }, []
    )
    
       
        ///CATEGORIES///


        
        
    const findCategory = (catagory) =>{
        console.log("find",catagory)
        // Make an API call to get data from THIS category
        // Once i've gotten the data change 'products' to this new data
    axios.get(`https://fakestoreapi.com/products/category/${catagory}`)
        .then(
        res=>{
            console.log(res.data)
            // I have the new data which are products from just this category
            setProducts(res.data)
        }
        )
        .catch(err=>console.log(err))
    }

    const fetchAllProducts = () => {
        // This function will generate all the products again
        axios.get(`https://fakestoreapi.com/products`)
          .then((res) => {
            console.log(res.data)
            setProducts(res.data); // Update the state with the fetched data
          })
          .catch((err) => console.log(err));
      };[]
    
    
  return (
    <div className="Homepage">
            <div className="categories-container">
                <p onClick={fetchAllProducts}>All</p>
                    {
                   categories.map(item=><p  key={item} style={{cursor: 'pointer'}} onClick={ ()=>findCategory(item)}>{item}</p>)
                    }
            </div>  

            

            <div className='products'>
                    {
                    products.map(item=><ProductCard key={item?.id} product={item}/>)
                    }
            </div>
    </div>
  )
}

export default Homepage

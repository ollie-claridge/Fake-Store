import { useState, createContext, useEffect } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
export const CartContext = createContext();

export default function CartContextProvider(props){
    //create global state
    const [cart, setCart] = useState([])
    //this functions job will be to add a product to the shopping cart
    const addProduct = (prodToCart) => {
        //add the product to state
        console.log('added', prodToCart)
        let newCart = [...cart, prodToCart]
        console.log(newCart)
        //now to store the result in state
        setCart(newCart)

    }

        

    // function to remove a charater 
    const removeProduct = (prodId) =>{
        console.log('remove', prodId)
        let newCart = cart.filter(item=>item.id!== prodId)
        //storing new array in state
        setCart(newCart)//this will update the new array
    }



    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct, ProductCard}} >
            {props.children}

        </CartContext.Provider>
    )
}

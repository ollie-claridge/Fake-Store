import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props){
    //create global state
    const [cart, setCart] = useState([])
    //this functions job will be to add a product to the shopping cart
    const addProduct = (productAdded) => {
        console.log('added', productAdded)
    }

    return(
        <CartContext.Provider value={{cart, addProduct}} >
            {props.children}

        </CartContext.Provider>
    )
}
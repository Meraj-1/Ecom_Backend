import { createContext, useEffect, useState } from "react"
import {products} from "../assets/assets"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const  delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems,setCartItem] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId,size) =>{
        if(!size) {
            toast.error('select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size] = 1;

        }
        setCartItem(cartData)
    }


const getCartCount = () => {
    return Object.values(cartItems).reduce((total, category) => {
      return total + Object.values(category).reduce((subTotal, count) => subTotal + (count > 0 ? count : 0), 0);
    }, 0);
  };
  

const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
  
    // Ensure the item and size exist in the cart before updating
    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
  
      // Remove the size if quantity is 0
      if (quantity <= 0) {
        delete cartData[itemId][size];
  
        // If no sizes are left for the item, remove the item entirely
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    }
  
    setCartItem(cartData);

    // Optionally update the cart count
    getCartCount,updateQuantity;
  };
  
//    const getCartAmount = () => {
//         let totalAmount = 0;
//         for(const items in cartItems) {
//             let itemInfo = products.find((product)=> product._id === items);
//             for(const item in cartItems[items]){
//                 try{
//                     if(cartItems[items][item] > 0){
//                         totalAmount += itemInfo.price * cartItems[items][item]
//                     }
//                 }catch(error){

//                 }
//                 return totalAmount;
//             }
//         }
//    }
const getCartAmount = () => {
    return Object.keys(cartItems).reduce((total, productId) => {
      const productSizes = cartItems[productId];
      return total + Object.values(productSizes).reduce((subtotal, quantity) => {
        const product = products.find((item) => item._id === productId);
        return product ? subtotal + product.price * quantity : subtotal;
      }, 0);
    }, 0);
  };
   

    const value = {
     products , currency ,  delivery_fee,
     search,setSearch,showSearch,setShowSearch,cartItems,addToCart, getCartCount , updateQuantity, getCartAmount, navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
import axios from "axios";
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/CartConstant';

const addToCart =(productid, qty)=> async (dispatch, getState)=>{
    try{
        const { data } = await axios.get('http://localhost:4000/api/products/'+ productid);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        brand: data.brand,
        qty,
      }
    });
        
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    }catch(error){
        
    }
}
const removeFromCart = (productid) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productid });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
  }
  export {addToCart,
    removeFromCart};
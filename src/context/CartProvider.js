import React, { createContext, useReducer , useContext} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(
    {
        cartItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        addToCart: () => {},
        removeFromCart: () => {},
        incrementQuantityAction: () => {},
        decrementQuantityAction: () => {} ,
        orderHandler: ()=>{}
    }
);



const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const newState = [...state];
        newState[existingItemIndex].quantity += 1;
        return newState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload.id);

    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      case 'CLEAR_CART':
        return [];
  
    default:
      return state;
  }
};



export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };


  const incrementQuantityAction = (item) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };


  const decrementQuantityAction = (item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };
  const orderHandler = () => {
    toast.success('Purchase successful');
    dispatch({ type: 'CLEAR_CART' }); 
  };

  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalAmount,
        addToCart,
        removeFromCart,
        incrementQuantityAction,
        decrementQuantityAction,
        orderHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
    const cart = useContext(CartContext);
  
    return cart;
  };
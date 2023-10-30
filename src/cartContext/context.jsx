import { createContext, useReducer } from 'react';
import { initialState, reducerFunction } from './reducer';
import { TYPES } from './actions';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function addToCart(id) {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  }

  function clearCart() {
    dispatch({ type: TYPES.CLEAR_CART });
  }

  function delFromCart(id, all = false) {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  }

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, clearCart, delFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext};
export default CartProvider;
import { CartContext } from '../cartContext/context.jsx';
import { useContext } from 'react';

const Cart = () => {
  const { state, clearCart, delFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="w-full top-0 left-0 pt-24 px-20 max-sm:px-8 xl:px-48 2xl:px-72 mb-20 h-full 2xl:mb-40">
      <div className="mb-10">
        <span
          className="text-3xl lg:text-4xl font-semibold"
          style={{ fontFamily: 'Gabarito' }}
        >
          Shopping Cart
        </span>
        <hr className="mt-3" />
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-4/5">
          <table className="border w-full">
            <thead>
              <tr className="border px-4 py-2 bg-gray-100/30">
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.length > 0 ? (
                state.cart.map(item => (
                  <tr key={item.id} className="text-center">
                    <td className="border px-4">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="sm:w-[100px] sm:h-[100px] m-auto w-[70px] h-[70px]"
                      />
                    </td>
                    <td className="border px-4 py-2 text-xs sm:text-base lg:text-xl">
                      {item.name}
                    </td>
                    <td className="border px-4 py-2 text-xs sm:text-base lg:text-xl">
                      €{item.price}
                    </td>
                    <td className="border px-4 py-2 text-xs sm:text-base lg:text-xl">
                      <span className="mr-2 border px-2 bg-gray-100 cursor-pointer" onClick={() => delFromCart(item.id)}>-</span>
                      {item.quantity}
                      <span className="ml-2 border px-2 bg-gray-100 cursor-pointer" onClick={() => addToCart(item.id)}>+</span>
                    </td>
                    <td className="border px-4 py-2 text-xs sm:text-base lg:text-xl">
                      €{item.price * item.quantity}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2" colSpan="5">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="w-1/5 text-center">Hola</div>
      </div>
    </div>
  );
};

export default Cart;

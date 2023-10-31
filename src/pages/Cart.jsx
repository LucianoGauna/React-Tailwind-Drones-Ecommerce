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
      <div className="flex w-full flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4 lg:w-4/5">
          <table className="border w-full">
            <thead className="max-md:hidden">
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
                  <tr
                    key={item.id}
                    className="text-center max-md:flex max-md:flex-col max-md:border-[1.5px] border-black/90"
                  >
                    <td className="border px-4">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-[100px] h-[100px] m-auto "
                      />
                    </td>
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-bold">
                      {item.name}
                    </td>
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-semibold max-w-min">
                      €{item.price}
                    </td>
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl">
                      <div>
                        <span
                          className="mr-2 px-2 cursor-pointer bg-gray-100 rounded font-semibold"
                          onClick={() => delFromCart(item.id)}
                        >
                          {item.quantity === 1 ? 'x' : '-'}
                        </span>
                        {item.quantity}
                        <span
                          className="ml-2 px-2 cursor-pointer bg-gray-100 rounded font-semibold"
                          onClick={() => addToCart(item.id)}
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-bold">
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
          <div className="text-end">
            <button
              className="border-2 rounded py-2 px-5 font-semibold hover:bg-red-500/30 tracking-wider hover:underline"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="lg:w-1/5 w-full text-center">
          <table className='border'>
            <thead>
              <th>Cart Total</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Subtotal:</span>
                  <span>€23423</span>
                </td>
                <td>
                  Shipping:
                  <form>
                    <div>
                      <input type="radio" value="shipping" />
                      <label htmlFor="">Free shipping </label>
                    </div>
                    <div>
                      <input type="radio" value="shipping" />
                      <label htmlFor="">Free shipping </label>
                    </div>
                    <div>
                      <input type="radio" value="shipping" />
                      <label htmlFor="">Free shipping </label>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

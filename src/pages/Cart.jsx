import { CartContext } from '../cartContext/context.jsx';
import { useContext } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Cart = () => {
  const { state, clearCart, delFromCart, addToCart } = useContext(CartContext);
  let finalPrice = state?.cart.map(item => item.price * item.quantity);
  let totalPrice = finalPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

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
      <div
        className="flex w-full flex-col lg:flex-row gap-6"
        style={{ fontFamily: 'Roboto Condensed' }}
      >
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
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-bold ">
                      {item.name}
                    </td>
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-semibold ">
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
                    <td className="border px-4 py-2 text-base sm:text-base lg:text-xl max-md:font-bold bg-gray-200/40">
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
        <div className="lg:w-1/5 md:w-1/2 w-full text-center h-full">
          <table className="border w-full h-full">
            <thead>
              <th className="border px-4 bg-gray-100/30">Cart Total</th>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-between px-4 py-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="text-base sm:text-base lg:text-lg ">
                    €{totalPrice}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="flex items-center justify-between px-4 ">
                  <span className="font-semibold">Delivery:</span>
                  <span>
                    <AiOutlineInfoCircle className="cursor-pointer text-base sm:text-base lg:text-lg" />
                  </span>
                </td>
              </tr>
              <hr className="w-3/4 flex m-auto my-4" />
              <div className="flex justify-center">
                <button className="border-2 h-1/2 bg-green-500 text-white py-2 px-6 font-semibold hover:bg-green-700 tracking-wider hover:underline">
                  Checkout
                </button>
              </div>
              <div className="mt-4 px-4">
                <p className="text-sm text-start font-semibold">WE ACCEPT:</p>
                <div className="flex gap-2 justify-center mt-1 flex-wrap w-full mb-2">
                  <img
                    src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                    alt="PaymentMethodImage"
                    className=""
                  />
                  <img
                    src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                    alt="PaymentMethodImage"
                    className=""
                  />
                  <img
                    src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg"
                    alt="PaymentMethodImage"
                    className=""
                  />
                  <img
                    src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
                    alt="PaymentMethodImage"
                    className=""
                  />
                </div>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

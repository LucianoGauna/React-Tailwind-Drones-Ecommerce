import { useContext } from 'react';
import { products } from '../constants/data';
import { LuShoppingBag } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartContext/context';

const Products = () => {

  const { addToCart } = useContext(CartContext)

  return (
    <section className="mb-20 flex flex-col items-center justify-between mx-10 mt-20">
      <div>
        <div className="flex flex-col items-center mb-10">
          <h2
            className="text-4xl font-semibold mb-4 tracking-wide"
            style={{ fontFamily: 'Gabarito' }}
          >
            PRODUCTS
          </h2>
          <p style={{ fontFamily: 'Roboto Condensed' }}>
            Lorem ipsum dolor sit amet conse ctetu.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {products?.map(item => (
            <article
              key={item.id}
              className="m-auto flex flex-col relative border items-center hover:shadow-lg"
            >
              <Link
                to={`/product/${item.id}`}
                className="w-[90%] h-auto mb-5 cursor-pointer"
              >
                <img src={item.images[0]} alt="image" />
              </Link>
              {item.newArrival ? (
                <span className="absolute top-0 right-0 px-2 py-1 bg-[#a749ff] text-white text-xs font-bold shadow-md">
                  New Arrival
                </span>
              ) : null}
              <h1
                className={`mb-[2px] text-ellipsis whitespace-nowrap overflow-hidden font-semibold tracking-wide text-center lg:text-xl text-lg`}
                style={{ fontFamily: 'Roboto Condensed' }}
              >
                {item.name.length > 28
                  ? `${item.name.slice(0, 30)}...`
                  : item.name}
              </h1>
              <div className="mb-5 text-center text-lg">
                <span className="mr-2">€{item.price} </span>
                {item.discount ? (
                  <span className="text-red-600 line-through">
                    €{item.price + item.price * item.discount}
                  </span>
                ) : null}
              </div>
              <div className="text-center mb-3">
                <button
                  className="border-2 rounded py-2 px-5 font-semibold hover:ring-1 hover:bg-blue-300/10 flex items-center m-auto mb-2 tracking-wider hover:underline"
                  style={{ fontFamily: 'Roboto Condensed' }}
                  onClick={() => addToCart(item.id)}
                >
                  Add To Cart <LuShoppingBag className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

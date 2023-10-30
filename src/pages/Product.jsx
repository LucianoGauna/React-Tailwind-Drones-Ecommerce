import { Link, useParams } from 'react-router-dom';
import { products } from '../constants/data';
import { FiSearch } from 'react-icons/fi';
import { useContext, useEffect, useState } from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import {
  BsCreditCard,
  BsChevronCompactRight,
  BsChevronCompactLeft,
} from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { CartContext } from '../cartContext/context';

const Product = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSliderIndex, setImageSliderIndex] = useState(0);
  const relatedProducts = products.filter(item => item.id !== product.id);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmallScreen = useMediaQuery({ query: '(min-width: 520px)' });
  let maxImagesToShow;

  if (isLargeScreen) {
    maxImagesToShow = 4;
  } else if (isMediumScreen) {
    maxImagesToShow = 3;
  } else if (isSmallScreen) {
    maxImagesToShow = 2;
  } else {
    maxImagesToShow = 1;
  }

  const imagesToShow = [
    relatedProducts[
      (imageSliderIndex + relatedProducts.length) % relatedProducts.length
    ],
    relatedProducts[(imageSliderIndex + 1) % relatedProducts.length],
    relatedProducts[(imageSliderIndex + 2) % relatedProducts.length],
    relatedProducts[(imageSliderIndex + 3) % relatedProducts.length],
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  const { addToCart } = useContext(CartContext)

  function handleImage(currentIndex) {
    setCurrentIndex(currentIndex);
  }

  function handleNextImages() {
    const newIndex = (imageSliderIndex + 1) % products.length;
    setImageSliderIndex(newIndex);
  }

  function handlePrevImages() {
    const newIndex = (imageSliderIndex - 1 + products.length) % products.length;
    setImageSliderIndex(newIndex);
  }

  function handleClickSliderProduct() {
    setImageSliderIndex(currentIndex);
    setCurrentIndex(0);
  }

  return (
    <div className="w-full top-0 left-0 pt-24 px-20 max-sm:px-8 xl:px-48">
      <div>
        <h1
          className="text-gray-400 tracking-wide"
          style={{ fontFamily: 'Roboto condensed' }}
        >{`Home / ${product.category} / ${product.name}`}</h1>
      </div>

      <div className="md:hidden">
        <h2
          className="text-4xl py-4 max-sm:text-3xl mb-5 tracking-wide font-bold"
          style={{ fontFamily: 'Gabarito' }}
        >
          {product.name}
        </h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
        <section className="w-full h-full relative md:col-span-1">
          <div className="md:h-[70%] w-full rounded flex justify-center items-center md:shadow-sm">
            <img
              src={`../${product.images[currentIndex]}`}
              alt="Product Image"
              className="md:w-[90%] md:h-[90%] object-contain"
            />
          </div>

          <div>
            {product.newArrival ? (
              <span
                className="bg-violet-600 rounded-full font-bold px-1 py-2 absolute top-4 left-3 text-white text-sm tracking-widest"
                style={{ fontFamily: 'Roboto condensed' }}
              >
                New
              </span>
            ) : null}
            <FiSearch className="absolute top-4 right-3 text-2xl cursor-pointer" />
          </div>

          <div className="flex gap-5 mt-5 w-full md:h-[10%] justify-center max-md:h-[12vh] max-sm:h-[8vh]">
            {product.images.map((item, index) => (
              <img
                key={item}
                src={`../${item}`}
                alt="Product Image"
                onClick={() => handleImage(index)}
                className="lg:h-24 lg:w-24 cursor-pointer hover:shadow-lg hover:scale-110 transition duration-200 ease-in border"
              />
            ))}
          </div>
        </section>

        <section className="md:col-span-1 flex flex-col items-center">
          <div className="max-md:hidden">
            <h2
              className="text-3xl xl:text-4xl py-4 mb-5 tracking-wide font-bold"
              style={{ fontFamily: 'Gabarito' }}
            >
              {product.name}
            </h2>
          </div>

          <div className="lg:text-4xl text-3xl font-bold">
            <span>€{product.price} </span>
            {product.discount ? (
              <span className="text-red-600 line-through">
                €{product.price + product.price * product.discount}
              </span>
            ) : null}
          </div>

          <hr className="w-full text-center mx-auto my-5 2xl:w-[80%] 2xl:my-8" />

          <div className="flex mb-2 gap-4">
            <img
              src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
              alt="Payment Image"
            />
            <img
              src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
              alt="Payment Image"
            />
            <img
              src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
              alt="Payment Image"
            />
          </div>

          <div
            className="lg:text-lg md:mb-8 flex flex-col text-green-600"
            style={{ fontFamily: 'Roboto condensed' }}
          >
            <div className="flex items-center">
              <BsCreditCard />
              <span className="mx-3">Pay with bank transfer</span>
            </div>
            <div className="flex items-center">
              <TbTruckDelivery />
              <span className="mx-3">Free delivery</span>
            </div>
          </div>

          <div>
            <button
              className="border-2 bg-blue-500 text-white rounded py-2 px-5 hover:ring-1 hover:bg-blue-700 focus:ring focus:ring-blue-300 flex items-center m-auto tracking-wider hover:underline max-md:mt-4"
              style={{ fontFamily: 'Roboto Condensed' }}
              onClick={() => addToCart(product.id)}
            >
              Add To Cart <LuShoppingBag className="ml-2" />
            </button>
          </div>

          <hr className="w-full text-center mx-auto my-5 2xl:w-[80%] 2xl:my-8" />

          <div
            className="lg:text-xl 2xl:px-10"
            style={{ fontFamily: 'Roboto condensed' }}
          >
            <h2 className="font-extrabold mb-3 flex justify-center">
              ADD EXTENDED WARRANTY
            </h2>
            <ul className="mb-3">
              <li>
                • Get a one-off new replacement if your product becomes faulty
              </li>
              <li>
                • You're covered for failures caused by reasonable wear and tear
              </li>
            </ul>
            <span className="underline font-semibold">Description</span>
            <span>: {product.description}</span>
          </div>
        </section>
      </div>

      <div className="w-full h-full flex flex-col items-center mt-28">
        <section>
          <h1
            className="text-center text-2xl font-semibold tracking-wide underline"
            style={{ fontFamily: 'Roboto Condensed' }}
          >
            RELATED PRODUCTS
          </h1>
          <div className="relative flex gap-3 mt-5">
            {imagesToShow.slice(0, maxImagesToShow).map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:w-[25%] lg:mt-10 relative border hover:shadow-lg flex-1 max-[520px]:w-64 max-[520px]:h-64 items-center"
                onClick={handleClickSliderProduct}
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    key={item.id}
                    src={`../${item.images[0]}`}
                    alt={`Product Image ${item.id}`}
                    className="cursor-pointer w-full h-full p-4 max-[520px]:w-44 max-[520px]:h-44"
                  />
                  {item.newArrival ? (
                    <span className="absolute top-0 right-0 px-2 py-1 bg-[#a749ff] text-white text-xs font-bold shadow-md">
                      New Arrival
                    </span>
                  ) : null}
                </Link>
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
              </div>
            ))}
            <div className="absolute top-[47%] left-2 rounded-full p-3 bg-gray-200/50 hover:bg-gray-400/30 cursor-pointer ">
              <BsChevronCompactLeft onClick={handlePrevImages} />
            </div>
            <div className="absolute right-2 top-[47%] rounded-full p-3 bg-gray-200/50 hover:bg-gray-400/30 cursor-pointer ">
              <BsChevronCompactRight onClick={handleNextImages} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;

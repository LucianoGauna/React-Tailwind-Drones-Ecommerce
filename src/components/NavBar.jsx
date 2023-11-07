import { BsHeart } from 'react-icons/bs';
import { LuShoppingBag } from 'react-icons/lu';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { NavList } from '../constants/data';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../cartContext/context.jsx';

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { state } = useContext(CartContext) || {};

  const location = useLocation();

  function handleMenu() {
    setActiveMenu(!activeMenu);
  }

  let navBackground;
  let navText;
  if (location.pathname === '/') {
    navBackground = 'bg-transparent';
    navText = 'text-slate-100';
    if (window.scrollY > 0) {
      navBackground = 'bg-black/[80%]';
    }
  } else {
    navBackground = 'border';
    navText = 'md:text-gray-800';
    if (window.scrollY > 0) {
      if (!activeMenu) {
        navText = 'text-black';
        navBackground = 'border bg-white';
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setActiveMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`top-0 left-0 z-20 fixed py-4 ${navBackground}  px-3 w-full ${
        activeMenu
          ? 'max-md:bg-black/95 max-md:h-screen border-none transition-all duration-500 ease-in-out'
          : ''
      } ${scrollBackground ? '' : ''}`}
    >
      <div
        className={`flex justify-between items-center text-slate-200 w-full ${
          activeMenu ? '' : 'max-md:text-gray-800'
        }`}
      >
        <div className="max-w-full">
          <Link to={'/'}>
            <h1 className={`text-4xl cursor-pointer font-bold ${navText}`}>
              FaZe
            </h1>
          </Link>
        </div>
        <div className={`w-full px-2 `}>
          <ul
            className={`flex flex-col md:flex-row justify-center items-center ${
              activeMenu
                ? 'max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2'
                : 'max-md:hidden'
            }`}
          >
            {NavList.map(item => (
              <Link to={item.to}>
                <li
                  key={item.title}
                  className={`md:mx-5 xl:mx-14 hover:text-slate-400 hover:underline cursor-pointer m-0 max-md:text-4xl max-md:py-6 ${navText}`}
                  style={{ fontFamily: 'Roboto Condensed' }}
                >
                  {item.title}
                </li>
              </Link>
            ))}
            <Link
              className={`md:hidden xl:mx-14 hover:text-slate-400 hover:underline cursor-pointer m-0 max-md:text-4xl max-md:py-6 ${navText}`}
              style={{ fontFamily: 'Roboto Condensed' }}
              to={'/cart'}
            >
              Cart
            </Link>
          </ul>
        </div>
        <div className={`flex items-center justify-between ${navText}`}>
          <BsHeart className="max-md:hidden mr-2 cursor-pointer" />
          {state && state.cart && state.cart.length > 0 ? (
            <Link to={'/cart'} className="relative">
              <LuShoppingBag className="max-md:hidden md:mr-2 cursor-pointer" />
              <span className="max-md:hidden absolute -top-3 left-1 rounded-full px-[7px] py-[2px] bg-red-500 text-white text-[10px] font-bold">
                {state.cart.length}
              </span>
            </Link>
          ) : (
            <Link to={'/cart'} className="relative">
              <LuShoppingBag className="max-md:hidden md:mr-2 cursor-pointer" />
            </Link>
          )}
          <FiSearch className="max-md:hidden md:mr-2 cursor-pointer" />
        </div>
        <div
          onClick={handleMenu}
          className={`md:hidden cursor-pointer text-xl ${navText}`}
        >
          {activeMenu ? <IoMdClose className="text-2xl" /> : <FiMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

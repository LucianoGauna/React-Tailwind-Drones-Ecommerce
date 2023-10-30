import { Link } from 'react-router-dom';
import { footerLinks } from '../constants/data';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100 px-4 flex justify-center mt-10">
      <div className="container">
        <div className="flex justify-between items-center w-full mb-6 max-sm:grid max-sm:grid-cols-2 max-sm:text-center">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">FaZe</h2>
            <div className="text-md text-slate-600">
              <p className="max-md:items-center">© 2023 FaZe.</p>
              <span>All rights reserved</span>
            </div>
          </div>
          {footerLinks?.map(element => (
            <div key={element.title} className="max-sm:mb-5">
              <h2 className="text-md font-medium text-gray-800">
                {element.title.toUpperCase()}
              </h2>
              <div className='flex flex-col'>
                {element.links.map(link => (
                  <Link
                    to={"/"}
                    key={link}
                    className="text-base text-slate-500 my-3 hover:text-[#a749ff] cursor-pointer"
                    onClick={() => window.scroll(0, 0)}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import {
  AiTwotonePhone,
  AiFillMail,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

const ContactUs = () => {

  function handleForm(e) {
    e.preventDefault()
  }
  return (
    <div className="w-full top-0 left-0 pt-24 px-20 max-sm:px-8 xl:px-48 2xl:px-72 mb-20 h-full 2xl:mb-40">
      <div className="w-full flex flex-col lg:flex-row max-sm:items-center justify-between text-gray-800">
        <div className='w-full max-sm:text-center'>
          <div className="text-3xl font-semibold mb-10">
            <h2 className="underline" style={{ fontFamily: 'Gabarito' }}>
              Contact details
            </h2>
          </div>
          <div className="flex flex-col  justify-between gap-3 ">
            <span className="flex items-center gap-2">
              <AiTwotonePhone /> 11-6666-7777
            </span>
            <span className="flex items-center gap-2">
              <AiFillMail /> faze@fazestore.com
            </span>
            <span className="flex items-center gap-2">
              <IoLocationSharp /> 123, Fake Street
            </span>
            <span className="flex items-center gap-2">
              <AiFillYoutube /> Youtube Channel
            </span>
            <span className="flex items-center gap-2">
              <AiFillFacebook /> Faze Action Facebook Fan Page
            </span>
            <span className="flex items-center gap-2">
              <AiFillInstagram /> @fazeaction
            </span>
          </div>
        </div>
        <div className='flex w-[80%] flex-col mt-16 md:w-[60%] lg:mt-0 lg:w-full'>
          <form className='flex flex-col gap-3 2xl:w-[85%]' onClick={handleForm}>
            <input type="text" placeholder="Name" className='w-full border px-2 py-3'/>
            <input type="text" placeholder="Phone number" className='w-full border px-2 py-3'/>
            <input type="email" placeholder="Email" className='w-full border px-2 py-3'/>
            <textarea type="text" placeholder="Message" className='w-full border px-2 py-4'/>
            <button className='w-full font-semibold bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-3000 active:bg-blue-800 mt-5'>Send</button>
          </form>
          
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

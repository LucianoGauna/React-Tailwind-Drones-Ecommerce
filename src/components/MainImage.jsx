import { AiOutlineRight } from 'react-icons/ai';

const MainImage = () => {
  return (
    <div className="relative w-full h-screen max-sm:h-3/4">
      <img
        className="top-0 left-0 w-full h-screen object-cover max-sm:h-[40rem]"
        src="https://images.unsplash.com/photo-1514043370531-a00dbd95c42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="Main image"
      />
      <div className="bg-black/10 absolute top-0 left-0 w-full h-screen max-sm:h-3/4" />
      <div className="absolute top-[32%] w-full h-full flex flex-col justify-center text-white max-sm:h-[95%]">
        <div className="max-w-[1400px] md:left-[50%] text-center m-auto p-4 md:top-[20%]">
          <p className="py-5 max-w-[600px] font-thin text-2xl max-sm:text-lg" style={{fontFamily: 'Roboto Condensed'}}>
            Lorem ipsum dolor sit amet
          </p>
          <span className="text-5xl md:text-6xl font-semibold tracking-wide max-sm:text-4xl" style={{fontFamily: 'Gabarito'}}>
            DJI MAVIC
          </span>
          <span className="text-5xl md:text-6xl drop-shadow-xl font-thin max-sm:text-4xl" style={{fontFamily: 'Gabarito'}}>
            {' '}
            PRO
          </span>
          <p className="py-5 max-w-[600px] text-3xl max-sm:text-xl" style={{fontFamily: 'Roboto Condensed'}}>
            Wherever you go
          </p>
          <button className="border rounded-full py-2 px-5 bg-blue-600/10 font-semibold hover:ring-1 hover:bg-blue-300/10 flex items-center m-auto mb-2 tracking-wider" style={{fontFamily: 'Roboto Condensed'}}>
            Buy Now <AiOutlineRight className='ml-2'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainImage;

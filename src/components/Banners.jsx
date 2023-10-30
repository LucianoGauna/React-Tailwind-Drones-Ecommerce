import { AiOutlineRight } from 'react-icons/ai';

const Banners = () => {
  return (
    <div>
      <div className="w-full h-1/5 mb-3 mt-3 relative">
        <img
          src="https://images.unsplash.com/photo-1508348152609-d285221f50e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="drone photo"
          className="w-full h-96 object-cover "
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white max-sm:h-[95%]">
          <div className=" md:left-[50%] text-center m-auto p-4 md:top-[20%] flex justify-between items-center w-full max-md:flex-col max-md:items-start">
            <span
              className="text-4xl md:text-6xl font-semibold tracking-wide max-sm:text-3xl w-5/12"
              style={{ fontFamily: 'Gabarito' }}
            >
              CAPTURE MOMENTS
            </span>
            <p
              className="py-5 max-w-[600px] font-thin text-xl max-sm:text-sm w-4/12 max-md:w-5/12"
              style={{ fontFamily: 'Roboto Condensed' }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ea voluptates reiciendis facilis deleniti laboriosam!.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex h-[60vh] gap-2 max-sm:h-[40vh]">
        <div className="w-1/2 relative overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1619042042563-6e9103f8e717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="w-full h-full object-cover transition-all transform scale-100 group-hover:scale-110 duration-300"
          />
          <div className="absolute bottom-10 left-10 flex flex-col items-center justify-center  max-lg:left-2 max-xl:bottom-2 max-xl:items-start">
            <p
              className="text-4xl text-white font-bold tracking-wide mb-2 max-sm:text-2xl"
              style={{ fontFamily: 'Gabarito' }}
            >
              Drones
            </p>
            <button
              className="border rounded-full py-2 px-5 bg-gray-200/90 font-semibold  tracking-wider  hover:underline flex items-center max-sm:px-2 max-sm:tracking-normal max-sm:py-1"
              style={{ fontFamily: 'Roboto Condensed' }}
            >
              Buy Now <AiOutlineRight className="ml-2 max-sm:ml-1" />
            </button>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1592909842831-a682eefcccfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="w-full h-full object-cover transition-all transform scale-100 group-hover:scale-110 duration-300"
          />
          <div className="absolute top-10 right-10 flex flex-col items-center justify-center max-sm:top-0 max-lg:right-2 max-xl:top-2 max-xl:items-end">
            <p
              className="text-4xl text-white font-bold tracking-wide mb-2 max-sm:text-2xl"
              style={{ fontFamily: 'Gabarito' }}
            >
              Action Cameras
            </p>
            <button
              className="border rounded-full py-2 px-5 bg-gray-200/90 font-semibold  tracking-wider hover:underline flex items-center max-sm:px-2 max-sm:tracking-normal max-sm:py-1"
              style={{ fontFamily: 'Roboto Condensed' }}
            >
              Buy Now <AiOutlineRight className="ml-2 max-sm:ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;

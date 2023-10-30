import { ServicesList } from '../constants/data.js';

const Services = () => {
  return (
    <div>
      <section className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-20 max-lg:mb-10">
        {ServicesList.map(service => (
          <div key={service.title} className="flex max-lg:mb-10 mb-20">
            <div className="mx-10 flex items-center">
              <div>
                <img src={service.icon} alt="Icon" className="mr-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-md text-slate-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <hr className='border w-[80vw] text-center mx-auto'/>
    </div>
  );
};

export default Services;

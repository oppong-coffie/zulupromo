import React, { useEffect, useState } from 'react'
import bigPromo from '../images/bigpromoGroup.png';
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';
import nav from '../images/navbar.png';
import snake from '../images/topgroup.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Promo = () => {
  const [workers, setWorkers] = useState(0);
  const [customers, setCustomers] = useState(0);
// Increment workers until it reaches 135
useEffect(() => {
  const interval = setInterval(() => {
    setWorkers((prevWorkers) => {
      if (prevWorkers >= 135) {
        clearInterval(interval); // Stop the interval when workers reach 135
        return prevWorkers;
      }
      return prevWorkers + 1;
    });
  }, 50);

  return () => clearInterval(interval); // Clean up on unmount
}, []);

// Increment customers until it reaches 100
useEffect(() => {
  const interval = setInterval(() => {
    setCustomers((prevCustomers) => {
      if (prevCustomers >= 100) {
        clearInterval(interval); // Stop the interval when customers reach 150
        return prevCustomers;
      }
      return prevCustomers + 1;
    });
  }, 50);

  return () => clearInterval(interval); // Clean up on unmount
}, []);

useEffect(() => {
  AOS.init();
}, [])


  return (
    <div className='m-0 p-0'>

      <img className='w-[100%] h-20 top-0 fixed z-30' src={nav} alt="Promo" />

    {/* START:: First Section */}
    <div className="h-[83vh] w-full pl-16 pr-40 mt-12">
      {/* Background image */}
      <img 
      data-aos="fade-zoom-in"
      // data-aos-delay="300"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      className="w-[100%] h-[100%]" src={snake} alt="Promo" />
      
      {/* Overlay image */}
      <div className="absolute top-[300px] left-1/2 transform -translate-x-80 -translate-y-1/2">
        <img
              data-aos="zoom-out"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
        className="w-[600px] h-[65vh]" src={bigPromo} alt="Promo" />
      </div>
    </div>
  {/* START:: First Section */}

  {/* START:: counting numbers Section */}
      <div className="relative flex justify-center top-[-50px] ">
          <div className="text-white z-10 absolute w-[40%] rounded-lg h-24 flex items-center justify-center px-5">
            <div className="bg-black w-[100%] h-[100%] opacity-85 absolute rounded-lg"></div>
            <div className="flex">
              <h1 className='text-3xl font-bold z-20'>{workers}+</h1>
              <p 
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in"
              className='text-slate-600 text-start pl-1  z-20'>Weekly workers and visitors</p>
              <h1 className='text-3xl font-bold  z-20'>{customers}%+</h1>
              <p 
                 data-aos="fade-right"
                 data-aos-delay="300"
                 data-aos-duration="3000"
                 data-aos-easing="ease-in"
              className='text-slate-600 text-start pl-1  z-20'>Customer satisfaction</p>
            </div>
          
            </div>
      </div>
    {/* END:: counting numbers Section */}

    {/* START:: second Section */}
    <div className="bg-[#343434] p-12 mt-[-30px]">
       <div className="flex justify-center ">
      <img 
         data-aos="fade-right"
         data-aos-delay="300"
         data-aos-duration="1000"
         data-aos-easing="ease-in"
      className='w-[50%] h-[77vh]' src={hero1} alt="HERO IMAGE1" />
      <img 
         data-aos="fade-left"
         data-aos-delay="300"
         data-aos-duration="1000"
         data-aos-easing="ease-in"
      className='w-[50%] h-[77vh]' src={hero2} alt="HERO IMAGE2" />
    </div>
    <div className="flex justify-center mt-[-25px] mb-12">
             <h1 
                data-aos="zoom-in"
                data-aos-delay="1500"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
             className="text-white bg-green-700 py-2 px-12 rounded-lg">Get Offer</h1>

    </div>
    </div>
       {/* END:: second Section */}

    </div>
  )
}
export default Promo

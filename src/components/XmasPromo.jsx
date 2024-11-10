import React from 'react'
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';

const XmasPromo = () => {
  return (
    <div className="bg-[#343434] p-5 md:p-12 mt-[-30px]">
    <div className="flex justify-center ">
   <img 
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
   className='w-[50%] h-[44vh] md:h-[77vh]' src={hero1} alt="HERO IMAGE1" />
   <img 
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
   className='w-[50%] h-[44vh] md:h-[77vh]' src={hero2} alt="HERO IMAGE2" />
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
  )
}

export default XmasPromo

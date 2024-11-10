import React from 'react'
import bigPromo from '../images/bigpromoGroup.png';
import snake from '../images/topgroup.png';


const BigPromo = () => {
  return (
          <div className=" h-[45vh] md:h-[83vh] w-full md:pl-16 pr-6 md:pr-40 mt-5 md:mt-12">
      {/* Background image */}
      <img 
      data-aos="fade-zoom-in"
      // data-aos-delay="300"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      className="w-[100%] h-[100%]" src={snake} alt="Promo" />
      
      {/* Overlay image */}
      <div className="absolute top-[120px] md:top-[300px] md:left-1/2 transform -translate-x-[300px] me:-translate-x-80 -translate-y-[60px] md:-translate-y-1/2">
        <img
              data-aos="zoom-out"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
        className="w-[240px] md:w-[600px] h-[31vh] md:h-[65vh]" src={bigPromo} alt="Promo" />
      </div>
    </div>
  )
}

export default BigPromo

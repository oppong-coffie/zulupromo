import React from 'react'
import alfy from '../images/alfy.png'
import swirly from '../images/swirly.png'
import left from '../images/left.png'
import right from '../images/right.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
const XmasPromo2 = () => {
  return (
    <div>
        <div className="md:flex bg-[#343434] pt-5 md:pt-0">
            <div className="bg-alfysymbol bg-cover md:w-[40%]">
                <img 
                data-aos="zoom-out"
                data-aos-delay="30"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                className='w-[90%] h-[88%] md:mt-16' src={alfy} alt="" />
            </div>
            <div className="md:w-[60%] text-white mt-5 md:mt-24">
              <img 
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="2500"
              data-aos-easing="ease-in-sine"
              className='z-10 absolute mt-[-80px] md:mt-[-90px] w-32' src={swirly} alt="" />
              <div className="ml-7">
                 <h1 
                 data-aos="fade-up"
                 data-aos-delay="30"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-sine"
                 className='text-4xl md:text-6xl'>Early Christmas Promo</h1>
              <p 
              data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="2500"
              data-aos-easing="ease-in-sine"
              className='mt-5'>
                From the  month of November to the ending  of the month<br className='hidden md:block'/> of December,
                get a co-working space <br /> for 1,500 cedis ! ! ! 
                 </p>
                 <div className="flex justify-center items-center gap-2 md:gap-5 mt-7 md:mt-10 mb-2">
                  <img  
                  data-aos="fade-right"
                  data-aos-delay="30"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                  className='w-24 h-12' src={left} alt="" />
                  <button 
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className='bg-[#488458] px-10 md:px-20 rounded-lg p-2'>Get Offer</button>
                  <img 
                  data-aos="fade-left"
                  data-aos-delay="30"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className='w-24 h-12' src={right} alt="" />
                 </div>
              </div>
              <div className="flex pt- items-end justify-around">
                <img
                data-aos="zoom-out"
                data-aos-delay="30"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
                className='w-44 h-44' src={image1} alt="" />
                <img 
                className='w-28 h-28' src={image2} alt="" />
                <img className='w-20 h-20' src={image3} alt="" />
              </div>
             
            </div>
        </div>
      
    </div>
  )
}

export default XmasPromo2

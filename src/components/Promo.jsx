import React, { useEffect, useState } from 'react'
import nav from '../images/navbar.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import BigPromo from './BigPromo';
import Counting from './Counting';
import XmasPromo from './XmasPromo';
import XmasPromo2 from './XmasPromo2';

const Promo = () => {

  useEffect(() => {
    AOS.init();
  }, [])




  return (
    <div className='m-0 p-0'>

      <img className='w-[100%] h-12 md:h-20 top-0 fixed z-30' src={nav} alt="Promo" />

   {/* START:: First Section */}
      <BigPromo />
  {/* START:: First Section */}

  {/* START:: counting numbers Section */}
      <Counting />
    {/* END:: counting numbers Section */}

    {/* START:: second Section */}
      <XmasPromo2 />
    {/* END:: second Section */}

    </div>
  )
}
export default Promo

import React from 'react'
import hero1 from '../images/hero1.png';
import { useEffect, useState } from 'react'



const Counting = () => {
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
  
 

  return (
    <div className="relative flex justify-center top-[-50px] ">
    <div className="text-white z-10 absolute w-[80%] md:w-[40%] rounded-lg h-24 flex items-center justify-center px-5">
      <div className="bg-black w-[100%] h-[100%] opacity-85 absolute rounded-lg"></div>
      <div className="flex">
        <h1 className='md:text-3xl font-bold z-20'>{workers}+</h1>
        <p 
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="3000"
              data-aos-easing="ease-in"
        className='text-slate-400 text-start pl-1  z-20 text-sm'>Weekly workers and visitors</p>
        <h1 className='md:text-3xl font-bold  z-20'>{customers}%+</h1>
        <p 
           data-aos="fade-right"
           data-aos-delay="300"
           data-aos-duration="3000"
           data-aos-easing="ease-in"
        className='text-slate-400 text-start pl-1  z-20 text-sm'>Customer satisfaction</p>
      </div>
    
      </div>
</div>
  )
}

export default Counting

import React from 'react'
import {Banner} from '../Assets/index';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen z-0'>
        <div className="w-full h-full">
            <img className='z-[100] w-full h-full bg-cover' src={Banner} alt="" />
            <div className='z-0 mt-[-350px] ml-[50px]  sm:mt-[-350px] sm:ml-[50px]'>
                <h1 className='text-white font-semibold text-[30px] sm:text-[40px]'>Welcome to</h1>
                <h1 className='text-white font-bold text-[25px] sm:text-[35px] mb-4'>BAFSD ICT CLUB</h1>
                <Link to='joinus' smooth={true} duration={500} className='hover:bg-white hover:text-black sm:px-4 sm:py-2 px-3 py-1 text-[15px] sm:text-[20px] rounded-md text-white font-bold border'>Join Now</Link>
            </div>
        </div>
    </div>
  )
}
//absolute top-[200px] left-[100px]
export default Hero
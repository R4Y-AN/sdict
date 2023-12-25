import React from 'react'
import {Insta,Dc} from '../Assets/index';
const Footer = () => {
  return (
    <div className='bg-black w-full h-[100px] flex flex-row items-center justify-between p-[25px]'>
      <p className='text-white  text-[12px]'>© 2023 BAF Shaheen College Dhaka ICT Club, All Rights Reserved. <span className='text-[13px]'>Developed By <i>Rayan</i></span></p>
      <div className='flex flex-row'>
      <img src={Insta} className='w-[40px] h-[20px] rounded cursor-pointer'></img>
      <img src={Dc} className='w-[20px] h-[20px] rounded cursor-pointer'></img>
      </div>
     
    </div>
  )
}

export default Footer
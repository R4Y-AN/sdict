import React from 'react';
import {EventLogo,Event} from '../Assets/index';

const Events=()=>{
    return(
        <div id='events' className='mt-[100px] w-full h-full bg-[#F7F7F7] '>
            <div className='w-full flex flex-row items-center justify-center space-x-1'>
                <img className='w-[80px] h-[80px]' src={EventLogo} alt="" />
                <h1 className='font-bold text-[30px]'>Past Events</h1>
            </div>

            <div className='w-full  h-full mt-[25px] flex flex-row flex-wrap items-center justify-center'>
                <div id='card' className='w-[300px] h-[300px] shadow-xl rounded m-5 text-[#161C27]'>
                    <img className='w-[300px] h-[200px] rounded' src={Event} alt="" />
                    <div className='flex flex-col w-full h-full mt-3 pl-3'>
                        <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Tech Intellect 2.0</span></h1>
                        <h1 className='text-[15px] font-[Nunito]'>Event Timing: <span className='font-bold '>11-20 October</span></h1>
                        <button className='border mr-3 text-gray-500 cursor-not-allowed mt-1 rounded'>Ended</button>
                    </div>
                </div>
                <div id='card' className='w-[300px] h-[300px] shadow-xl rounded m-5 text-[#161C27]'>
                    <img className='w-[300px] h-[200px] rounded' src={Event} alt="" />
                    <div className='flex flex-col w-full h-full mt-3 pl-3'>
                        <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Tech Intellect 2.0</span></h1>
                        <h1 className='text-[15px] font-[Nunito]'>Event Timing: <span className='font-bold '>11-20 October</span></h1>
                        <button className='border mr-3 border-gray-800 hover:border-white hover:text-white hover:bg-gray-800 cursor-pointer mt-1 rounded'>Register</button>
                    </div>
                </div>
                <div id='card' className='w-[300px] h-[300px] shadow-xl rounded m-5 text-[#161C27]'>
                    <img className='w-[300px] h-[200px] rounded' src={Event} alt="" />
                    <div className='flex flex-col w-full h-full mt-3 pl-3'>
                        <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Tech Intellect 2.0</span></h1>
                        <h1 className='text-[15px] font-[Nunito]'>Event Timing: <span className='font-bold '>11-20 October</span></h1>
                        <button className='border mr-3 text-gray-500 cursor-not-allowed mt-1 rounded'>Ended</button>
                    </div>
                </div>
                <div id='card' className='w-[300px] h-[300px] shadow-xl rounded m-5 text-[#161C27]'>
                    <img className='w-[300px] h-[200px] rounded' src={Event} alt="" />
                    <div className='flex flex-col w-full h-full mt-3 pl-3'>
                        <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Tech Intellect 2.0</span></h1>
                        <h1 className='text-[15px] font-[Nunito]'>Event Timing: <span className='font-bold '>11-20 October</span></h1>
                        <button className='border mr-3 text-gray-500 cursor-not-allowed mt-1 rounded'>Ended</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Events;
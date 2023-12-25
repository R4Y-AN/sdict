import React from 'react';
import {AchLogo,Achievement1} from '../Assets/index';

const Achievements=()=>{
    return(
        <div id='ach' className='mt-[100px] w-full h-full bg-[#F7F7F7] '>
        <div className='w-full flex flex-row items-center justify-center space-x-1'>
            <img className='w-[80px] h-[80px]' src={AchLogo} alt="" />
            <h1 className='font-bold text-[27px]'>Our Achievements</h1>
        </div>

        <div className='w-full  h-full mt-[25px] flex flex-row flex-wrap items-center justify-center'>
            <div id='card' className='w-[340px] h-[310px] shadow-xl rounded m-5 text-[#161C27]'>
                <img className='w-[340px] h-[220px] rounded' src={Achievement1} alt="" />
                <div className='flex flex-col w-full h-full mt-3 pl-3'>
                    <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Defence Science Revolution</span></h1>
                    <h1 className='text-[15px] font-[Nunito]'>Position: <span className='font-bold '>1st Place</span></h1>
                </div>
            </div>
            <div id='card' className='w-[340px] h-[310px] shadow-xl rounded m-5 text-[#161C27]'>
                <img className='w-[340px] h-[220px] rounded' src={Achievement1} alt="" />
                <div className='flex flex-col w-full h-full mt-3 pl-3'>
                    <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Defence Science Revolution</span></h1>
                    <h1 className='text-[15px] font-[Nunito]'>Position: <span className='font-bold '>1st Place</span></h1>
                </div>
            </div>
            <div id='card' className='w-[340px] h-[310px] shadow-xl rounded m-5 text-[#161C27]'>
                <img className='w-[340px] h-[220px] rounded' src={Achievement1} alt="" />
                <div className='flex flex-col w-full h-full mt-3 pl-3'>
                    <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Defence Science Revolution</span></h1>
                    <h1 className='text-[15px] font-[Nunito]'>Position: <span className='font-bold '>1st Place</span></h1>
                </div>
            </div>
            <div id='card' className='w-[340px] h-[310px] shadow-xl rounded m-5 text-[#161C27]'>
                <img className='w-[340px] h-[220px] rounded' src={Achievement1} alt="" />
                <div className='flex flex-col w-full h-full mt-3 pl-3'>
                    <h1 className='text-[15px] font-[Nunito]'>Event Name: <span className='font-bold '>Defence Science Revolution</span></h1>
                    <h1 className='text-[15px] font-[Nunito]'>Position: <span className='font-bold '>1st Place</span></h1>
                </div>
            </div>
            
        </div>
        
    </div>
    )
}

export default Achievements;
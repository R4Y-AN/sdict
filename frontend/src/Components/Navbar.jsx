import React,{useState} from 'react';
import {Logo} from '../Assets/index';
import { AiOutlineMenu ,AiTwotoneCloseCircle} from "react-icons/ai";
import {Link} from 'react-scroll';
const Navbar = ()=>{
    const [showNavbar, setshowNavbar] = useState(false);
    const handleLogo=()=>{
        window.location.reload();
    }
    const handleNav=()=>{
        setshowNavbar(!showNavbar);
    }
    return (
        <div className='fixed shadow-xl  w-full items-center'>
            <div className='mt-3 w-[80%] m-auto flex flex-row justify-between'>
                <div>
                    <img onClick={handleLogo} className='cursor-pointer w-[80px] h-[80px]' src={Logo} alt="" />
                </div>
                <div>
                    <ul className='mt-[25px] text-white font-semibold flex-row space-x-3 list-none hidden sm:flex'>
                        <Link to='home' smooth={true} duration={500}  className='cursor-pointer'>Home</Link>
                        <Link to='events' smooth={true} duration={500} className='cursor-pointer'>Events</Link>
                        <Link to='ach' smooth={true} duration={500} className='cursor-pointer'>Achievements</Link>
                        <Link to='joinus' smooth={true} duration={500} className='cursor-pointer'>Join Us</Link>
                    </ul>
                </div>
                <div className='flex items-center justify-end sm:hidden w-full z-50'>
                    {showNavbar?<AiTwotoneCloseCircle onClick={handleNav} className='float-right text-white text-[30px] cursor-pointer'/>:<AiOutlineMenu onClick={handleNav} className='text-white text-[30px] cursor-pointer'/>}
                </div>
                <div className={showNavbar?'block w-full z-10':'hidden'}>
                    <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                        <Link onClick={handleNav} to='home' smooth={true} duration={500}  className='cursor-pointer py-4 text-2xl text-blue-600'>Home</Link>
                        <Link onClick={handleNav} to='events' smooth={true} duration={500}  className='cursor-pointer py-4 text-2xl text-blue-600'>Events</Link>
                        <Link onClick={handleNav} to='ach' smooth={true} duration={500}  className='cursor-pointer py-4 text-2xl text-blue-600'>Achievements</Link>
                        <Link onClick={handleNav} to='joinus' smooth={true} duration={500}  className='cursor-pointer py-4 text-2xl text-blue-600'>Join Us</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
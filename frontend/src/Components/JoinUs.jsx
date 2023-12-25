import React,{useState} from 'react';
import {Logo,Email,Location} from '../Assets/index';
import {Toaster,toast} from 'react-hot-toast';

const JoinUs=()=>{
    const [fistName, setfistName] = useState("");
    const [lastName, setLastname] = useState("");
    const [section, setSec] = useState("");
    const [clss, setClass] = useState("");
    const [Interrested, setIter] = useState([]);
    const handleCheckbox=(topic)=>{
        if(!Interrested.includes(topic)){
            Interrested.push(topic);
        }else{
            Interrested = Interrested.filter(item => item !== topic);
        }
    }
    const handleSubmit=()=>{
        
        if(!(fistName===""||lastName===""||section===""||clss===""||Interrested.length==0)){
            const myPromise = fetch(process.env.REACT_APP_WEBHOOK, {
             method: 'POST',
             headers: {
             'Content-Type': 'application/json',
            },
             body: JSON.stringify({
    embeds: [
      {
        title: 'Join Request',
        description: `Firstname: ${fistName}\nLastname: ${lastName}\nSection: ${section}\nClass: ${clss}\nInterrested: ${Interrested.join(",")}`,
        color: 8978176,
        author: {
          name: 'SDICT WEBSITE',
          url: 'https://sdict.netlify.app/',
        },
      },
    ],
    attachments: [],
  }),
});


            toast.promise(myPromise, {
             loading: 'Loading',
             success: 'Data successfully sent.',
             error: 'Error when sending!',
            });
        } else{
            toast.error("Details are empty!")
        } 
    }
    return(

        <div id='joinus' className='w-full mt-[100px] h-full bg-[#F7F7F7] flex flex-col items-center justify-center space-y-6 sm:flex-row'>
           <div className='w-1/2 mt-[-40px] flex flex-col items-center justify-center'>
             <Toaster
  position="top-center"
  reverseOrder={false}
/>
                <img className='w-[150px] h-[150px]' src={Logo}></img>
                <h1 className='text-[30px] font-bold mt-[-35px]'>Join Our</h1>
                <h1 className='text-[20px] font-bold'>ICT Club Now</h1>
                <div className='flex flex-row'>
                <img className='w-[30px] h-[30px]' src={Email} alt="" />
                    <h1>bafsd@ict.com</h1>
                </div>
                <div className=' flex flex-row space-x-1 flex-nowrap'>
                    <img className='w-[25px] h-[25px]' src={Location} alt="" />
                    <h1 className=' text-ellipsis overflow-hidden  whitespace-nowrap'>Dhaka, Bangladesh</h1>
                </div>
           </div>
           <div className='w-1/2 flex flex-col items-center justify-center'>
                <input className='border-b bg-[#F7F7F7] h-[43px] w-[250px] outline-none focus:border-black' type="text" placeholder='Firstname' onChange={(e)=>(setfistName(e.target.value))} />
                <input className='border-b bg-[#F7F7F7] h-[43px] w-[250px] outline-none focus:border-black' type="text" placeholder='Lastname' onChange={(e)=>(setLastname(e.target.value))}/>
                <input className='border-b bg-[#F7F7F7] h-[43px] w-[250px] outline-none focus:border-black' type="text" placeholder='Class' onChange={(e)=>(setClass(e.target.value))}/>
                <input className='border-b bg-[#F7F7F7] h-[43px] w-[250px] outline-none focus:border-black' type="text" placeholder='Section'onChange={(e)=>(setSec(e.target.value))} />
                <div className='flex flex-col items-start justify-start w-[250px] mt-[10px]'>
                <h1 className='font-semibold'>Interrested In:</h1>
                <div className=' flex flex-row space-x-2'>
                    <h2>1. Programming</h2>
                    <input onChange={handleCheckbox.bind(this,"Programming")} type='checkbox' className='w-[20px] h-[20px] border rounded-sm bg-white cursor-pointer text-red-600'></input>
                </div>
                <div className=' flex flex-row space-x-2'>
                    <h2>2. Graphics Design</h2>
                    <input onChange={handleCheckbox.bind(this,"Graphics Design")} type='checkbox' className='w-[20px] h-[20px] border rounded-sm bg-white cursor-pointer text-red-600'></input>
                </div>
                <div className=' flex flex-row space-x-2'>
                    <h2>3. Video Editing</h2>
                    <input onChange={handleCheckbox.bind(this,"Video Editing")} type='checkbox' className='w-[20px] h-[20px] border rounded-sm bg-white cursor-pointer text-red-600'></input>
                </div>
                <div className='mb-5 flex flex-row space-x-2'>
                    <h2>4. Gaming</h2>
                    <input onChange={handleCheckbox.bind(this,"Gaming")} type='checkbox' className='w-[20px] h-[20px] border rounded-sm bg-white cursor-pointer text-red-600'></input>
                </div>
                </div>
                <button onClick={handleSubmit} className='hover:border-white hover:text-white hover:bg-gray-800 bg-[#F7F7F7] h-[43px] w-[250px]  text-black border border-black rounded-md mb-[20px]'>Submit</button>
           </div>
        </div>
    )
}

export default JoinUs;
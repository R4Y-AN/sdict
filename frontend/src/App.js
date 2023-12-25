import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Events from './Components/Events';
import Achievements from './Components/Achievements'
import JoinUs from './Components/JoinUs';
import Footer from './Components/Footer';
import Toaster from 'react-hot-toast';
function App() {
  return (
    
    <div className='bg-[#F7F7F7]'>
  
     <Navbar></Navbar>
     <Hero></Hero>
     <Events></Events>
     <Achievements></Achievements>
     
     <JoinUs></JoinUs>
     <Footer></Footer>
    </div>
  );
}

export default App;

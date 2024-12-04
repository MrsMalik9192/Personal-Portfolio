import React from 'react'
import Navbar from './Navbar'



 
const Hero = () => {
  return (
    <div id="hero" 
    className='min-h-screen bg-no-repeat bg-cover'
    style={{
      backgroundImage:"url(/profile.jpg)",
      
      backgroundSize:"15%",
     backgroundPosition:"left 60px top 100px",
     }}>

        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh.60px)]'>
            <div className='hidden lg:block'></div>        
            <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
                <div>
                <p data-aos="zoom-in-up">I'am</p>
                <p  data-aos="zoom-in-up">Kanwal</p>
                <p data-aos="zoom-in-up">Umair</p>
                </div>
            </div>
            </div>
        
        
      
    </div>
  )
}

export default Hero

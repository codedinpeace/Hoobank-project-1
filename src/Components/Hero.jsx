import React from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()
    
    tl.from(".discount img",{
      opacity:0,
      y:-50,
      delay:0.7,
    })

    tl.from(".discount p, .discount h1, .speacial-text ",{
      x:-300,
      opacity:0,
      stagger:0.5,
      duration:1,
    })
  })


  return (
    <div className='hero flex justify-start' id='Home'>
        <div className='dicount justify-center align-middle discount max-sm:mt-[-120px] sm:mt-[-80px] md:mt-35 z-[-5]'>
          <p className='discount-card max-sm:w-[280px] max-sm:text-[13px] sm:text-[13px] lg:text-[16px]  sm:w-[280px] max-md:w-[500px] md:w-[408px] lg:w-[408px] md:text-[16px] h-[40px] align-middle pt-2 text-gray-500'><span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
          <div className='sm:flex-col max-md:flex-col md:flex-row lg:flex-row max-sm:flex-col tagline flex lg:text-6xl md:text-5xl max-sm:text-4xl sm:text-4xl max-sm:flex gap-40'>
          <h1 className=' lg:w-150 text-left mt-10 text-white md:w-150 md:leading-17 md:text-left lg:leading-22 max-sm:w-90 max-sm:leading-15 sm:w-90 sm:leading-15 '>The Next <span>Generation</span> Payment Method</h1>
          <span className='md:hidden text-[16px] mt-[-130px] w-80 leading-5 text-left text-gray-600 font-light'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</span>
         <div className="flex overflow-x-hidden">
  <img
    src={assets.robot}
    alt=""
    className="w-full max-w-[300px] xl:w-[500px] lg:w-[300px] md:w-[500px] sm:w-[250px] xs:w-[200px]"
  />
</div> 
          </div>
          <div className='speacial-text max-sm:hidden sm:hidden md:flex xl:mt-[-150px] lg:mt-10 md:mt-10 font-light text-[16px] max-sm:w-80  md:w-120 lg:w-120 text-left text-gray-500'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees</div>
          <div className='CTA bg-white w-50 mt-10 h-15 hover:border-none rounded-md'>
          <button className='text-white w-50'>Get Started</button>  
      </div> 
    
     
      <div className='trust col-span-3 max-sm:gap-10 sm:gap-10 mt-30 flex justify-between max-md:w-100 flex-wrap max-sm:col-span-12 '>
        <h1 className='text-white text-4xl font-medium'>3800+ <span className='text-xl font-light'>ACTIVE USERS</span></h1>
        <h1 className='text-white text-4xl font-medium'>230+ <span className='text-xl font-light'>TRUSTED BY COMAPANIES</span></h1>
        <h1 className='text-white text-4xl font-medium'>$230M+ <span className='text-xl font-light'  >TRANSACTIONS</span></h1>
      </div>
      </div>
    </div>
  )
}

export default Hero  
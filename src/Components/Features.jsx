import React from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Features = () => {
  
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".features",{
      x:300,
      opacity:0,
      duration:1,
      scrollTrigger:{
        scrub:2,
        scroller:"body",
        trigger:".features",
        end:"bottom 40%"
      }
    })
  })


  return (
    <div className='overflow-x-hidden mt-35' id="Fea"> 
        <div className='features xl:flex justify-between gap-30 mt-4  0'>
            <h1 className='max-md:w-70 sm:text-center sm:mx-auto xl:mx-0 max-lg:text-center max-md:text-left xl:text-5xl md:text-5xl md:mx-auto lg:text-center xl:text-left lg:mx-auto text-white font-medium leading-14 lg:w-150 sm:w-100 max-md:w-100 md:w-150 max-md:text-xl text-left'>You do the buisness, we'll handle the money.
                <br />
                <span className='max-lg:flex md:w-150 max-lg:text-center'>
              <p className='max-md:text-left sm:text-center sm:mx-auto lg:text-center xl:text-left max-lg:text-center md:mx-auto text-gray-600 text-left mt-8 max-md:text-[10px] text-[16px] leading-7'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
              </span>
              <button className='mt-10 btn text-[16px] leading-8'>Get Started</button>
            </h1>
            
            
            <div className='flex gap-5 w-[400px] flex-col max-lg:mt-20 lg:mt-20  xl:mt-[-15px] lg:mx-auto max-lg:mx-auto '>
              <div className='crd flex border-none rounded-2xl gap-5 py-3 px-1 items-center'>
            <div className='star flex justify-center w-18 h-18 border-2 border-blue-300  rounded-full max-md:w-12 max-md:h-12'> 
            <img src={assets.star} alt="" className='w-10 max-md:w-5' />
            </div>
            <div className=' text-left'>
            <h1 className='text-white font-medium max-md:text-[12px] text-[20px]'>Rewards</h1>
                <p className='text-[16px] max-md:w-70 max-md:text-[10px] w-100 text-gray-600'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
            
            </div>
              <div className='crd flex gap-5 py-3 px-1'>
            <div className='star flex justify-center max-md:w-12 max-md:h-12 w-18 h-18 border-2 border-blue-300  rounded-full'>
            <img src={assets.shield} alt="" className='w-10 max-md:w-5' />
            </div>
            <div className=' text-left'>
            <h1 className='text-white font-medium text-[20px] max-md:text-[12px]'>100% Secured</h1>
                <p className='text-[16px]  w-100 text-gray-600 max-md:w-70 max-md:text-[10px] '>We take proactive steps make sure your information and transactions are secure.</p>
            </div>
            
            </div>
              <div className='crd flex gap-5 py-3 px-1'>
            <div className='star flex justify-center max-md:w-12 max-md:h-12 w-18 h-18 border-2 border-blue-300  rounded-full'>
            <img src={assets.send} alt="" className='w-10 max-md:w-5' />
            </div>
            <div className=' text-left'>
            <h1 className='text-white font-medium text-[20px] max-md:text-[12px]'>Balance Transfer</h1>
                <p className='text-[16px] w-100 text-gray-600 max-md:w-70 max-md:text-[10px] '>A balance transfer credit card can save you a lot of money in interest charges.</p>
            </div>
            
            </div>
            </div>
        </div>
        {/* <div className='text-gray-600 md:w-150 text-left mt-10'>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className='btn mt-10'>Get Started</button> */}
         </div>
    // </div>
  )
}

export default Features
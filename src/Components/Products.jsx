import React from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


  
    gsap.registerPlugin(ScrollTrigger);


    
    const Products = () => {
    useGSAP(()=>{
      const tl = gsap.timeline();
  
      tl.from(".products h1, .products p",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".products",
          start:"top 80%",
          end:"bottom 20%",
        }
      })
      tl.from(".products img",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".products",
          start:"top 20%",
          end:"bottom 90%",     
        }
      })
      tl.from(".products2 h1, .products2 p",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".products2",
          start:"top 100%",
          end:"top 80%",
        }
      })
      tl.from(".products2 img",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".products2",
          start:"top 100%",
          end:"bottom 80%",
        }
      })
    })
  return (
    <div className='max-md:mt-30 mt-50 overflow-x-hidden' id='Pro'>
        <div className='products text-white lg:flex justify-between md:flex-col lg:flex-row'>
            <img src={assets.bill} alt="" className='w-lg max-lg:mx-auto max-md:w-100' />
            <h1 className='md:text-left max-md:mt-20 max-lg:mx-auto  md:mt-10 text-left text-5xl max-xl:text-3xl max-xl:leading-10 max-md:w-100 w-120 font-medium leading-15'>Easily control your billing & invoicing.
                <br />
                <p className='md:text-left mt-10 text-left text-gray-600 text-[20px] max-md:text-[16px] leading-6'>Take full control of your finances with effortless billing, real-time invoicing, and secure transactions—anytime, anywhere</p>
                <span className='flex mt-10 max-lg:justify-around gap-10'>
                <img src={assets.apple} alt="" /> <img src={assets.google} alt="" />
                </span>
            </h1>
        </div>
        <div className='products2 mt-50 text-white lg:flex justify-between md:flex-col lg:flex-row'>
                <img src={assets.card} alt="" className='lg:hidden max-lg:block mt-30 w-lg max-lg:mx-auto max-md:w-100' />
            <h1 className='md:text-left max-md:mt-20 max-lg:mx-auto md:mt-10 text-left text-5xl max-xl:text-3xl max-xl:leading-10 max-md:w-100 w-120 font-medium leading-15'>Find a better card deal in few easy steps.
                <br />
                <p className='md:text-left mt-10 text-left text-gray-600 text-[20px] max-md:text-[16px] leading-6'>Discover the best credit card options tailored to your needs. Compare rates, explore exclusive deals, and make smarter financial decisions—all in just a few clicks.</p>
                <span className='btn-2 flex mt-10    gap-10'>
                <button className='text-[16px]'>Get Started</button>
                </span>
            </h1>
            <img src={assets.card} alt="" className='max-lg:hidden w-lg max-lg:mx-auto max-md:w-100' /> 
        </div>  
    </div>
  )
}


export default Products
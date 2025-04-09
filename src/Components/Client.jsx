import React from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


  
    gsap.registerPlugin(ScrollTrigger);


    

    
    const Client = () => {

    useGSAP(()=>{
      const tl = gsap.timeline();
  
      tl.from(".client-heading h1",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".client-heading h1",
          start:"top 80%",
          end:"bottom 20%",
        }
      })
      tl.from(".client-heading p",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".client-heading p",
          start:"top 20%",
          end:"bottom 90%",
          
        }
      })
      tl.from(".cards",{
        y:-30,
        opacity:0,
        duration:0.3,
        scrollTrigger:{
          scrub:2,
          scroller:"body",
          trigger:".cards ",
          start:"top 20%",
          end:"bottom 90%",
          stagger:0.3,
        }
      })

      tl.from(".Comapny-Logos img",{
        y:-30,
        opacity:0,
        duration:0.8,
        stagger:0.2,
        scrollTrigger:{
            scroller:"body",
            trigger:".Comapny-Logos img",
            scrub:2,
        }
      })
    
    })
  return (
    <div className='mt-60' id='Cli'>
        <div className='client-heading flex justify-between max-lg:flex-col'>
            <h1 className='max-md:w-70 text-white text-5xl w-120 leading-14 text-left max-lg:mx-auto max-lg:text-center max-md:text-left  max-md:leading-6 max-md:text-xl'>What people are saying about us</h1>
            <p className='text-gray-400 items-center my-auto text-left w-120 max-lg:mt-10 max-lg:mx-auto max-lg:text-center max-md:text-left max-md:text-[10px] text-xl max-md:w-70'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='cards flex flex-wrap border-none justify-center gap-13 max-md:gap-0' >
        <div className='crd mt-30 w-[370px] h-[395px]  p-10 border-1 border-gray-800 rounded-2xl'>
            <div className=' '>
                <div className=' rounded-2xl '>
                <img src={assets.quotes} alt="" className='w-[42.6px] h-[27.6px]' />  
                <p className='text-white  text-left mt-20'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <span className='flex gap-5 '>
                <img src={assets.people01} alt="" className='w-[48px] mt-20' />
                <p className='mt-20  text-gray-400'>James Herman</p>
                </span>
                </div>
            </div>
        </div>
        <div className='crd mt-30 w-[370px] h-[395px]  p-10  border-1 border-gray-800 rounded-2xl'>
            <div className=' '>
                <div className=' rounded-2xl'>
                <img src={assets.quotes} alt="" className='w-[42.6px] h-[27.6px]' />  
                <p className='text-white  text-left mt-20'>Money makes your life easier. If you're lucky to have it, you're lucky and hoobank made it really easy.</p>
                <span className='flex gap-5 '>
                <img src={assets.people02} alt="" className='w-[48px] mt-20' />
                <p className='mt-20 text-gray-400'>Steve Mark</p>
                </span>
                </div>
            </div>
        </div>
        <div className='crd mt-30 w-[370px] h-[395px]  p-10  border-1 border-gray-800 rounded-2xl'>
            <div className=' '>
                <div className=' rounded-2xl'>
                <img src={assets.quotes} alt="" className='w-[42.6px] h-[27.6px]' />  
                <p className='text-white  text-left mt-20'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <span className='flex gap-5 '>
                <img src={assets.people03} alt="" className='w-[48px] mt-20' />
                <p className='mt-20 text-gray-400'>Kenn Gallagher</p>
                </span>
                </div>
            </div>
        </div>
        
       
        </div>
       
            <div className='Comapny-Logos flex justify-between items-center mt-30 align-middle flex-wrap max-md:gap-10'>
                <img src={assets.airbnb} alt=""  className=' w-[192px] h-[60px]' />
                <img src={assets.binance} alt="" className='w-[192px] h-[38.64px]' />
                <img src={assets.coinbase} alt="" className='w-[192px] h-[41.25px]' />
                <img src={assets.dropbox} alt="" className='w-[192px] h-[37.86px]' />
            </div>  
    </div>
  )
}

export default Client
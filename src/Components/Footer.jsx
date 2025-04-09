import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='crd-2  xl:w-[1170px] xl:h-[293px] lg:w-[950] lg:h-[220px] max-md:flex-col max-md:flex  flex justify-center align-middle'>
            <h1 className='max-md:mt-10 max-md:text-center max-sm:text-2xl xl:text-5xl lg:text-3xl md:text-2xl text-left text-white m-auto sm:text-2xl'>Let’s try our service now!
                <br />
                <p className='xl:text-xl mt-5 xl:w-159 max-sm:text-[10px] max-sm:w-80 max-sm:text-center lg:w-130 md:text-[12px] md:w-100 sm:text-[10px] sm:w-80  lg:text-[14px] text-left'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </h1>
            <span className='btn-2 flex xl:p-20 sm:p-10 max-sm:p-10'>
            <button className='btn-2 m-auto text-xl '>Get started</button>
            </span>
        </div>
        <div className=''>
        <div className='mt-50 flex  justify-between max-md:flex-col '>   
            <img src={assets.logo} alt="" className='mt-5' />
        <div className='flex text-white mt-13 text-xl gap-20 underline-offset-2 max-md:gap-15 max-md:text-[16px] '>
        <a   className='underline-offset-2 hover:text-blue-300' href="#Home">Home</a>
          <a  className='underline-offset-2 hover:text-blue-300' href="#Fea">Features</a>
          <a className='underline-offset-2 hover:text-blue-300'  href="#Pro">Product</a>
          <a  className='underline-offset-2 hover:text-blue-300'  href="#Cli">Client</a> 
          
        </div>
        </div>
          <hr className='text-gray-400 mt-5 max-auto' />
        <span className='flex gap-10 items-center'>
          <p className='text-gray-600 mt-5 text-left'>Copyright © Pranam Shaw</p>
          <a className='mt-2 ml-auto' href="https://www.instagram.com/__i.am.alive__/"><img className='mt-2 ml-auto' src={assets.instagram} alt="" /></a>
          <a href="https://x.com/PranamShaw"><img src={assets.twitter} className='mt-2' alt="" /></a>
          <a href=""><img src={assets.linkedin} alt="" className='mt-2' /></a>
          </span>
        </div>
    </div>
  )
}

export default Footer   
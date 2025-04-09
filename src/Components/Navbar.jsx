import React, { useEffect } from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Navbar = () => {

  const[visibile, setVisible] = useState(false)
  
  const handleVisibilty = () =>{
    setVisible(v => !v)
  }
  
  
  useGSAP(()=>{
      const tl = gsap.timeline()
      tl.from(".logo",{
        y:-30,
        opacity:0,
        duration:0.5,
      })

      tl.from("ul a",{
        y:-30,
        opacity:0,
        duration:0.5,
        stagger:0.2,
      })
    })

  useEffect(()=>{
    if(setVisible === false){
      document.body.style.overflow = "hidden";
    }

    else{ 
      document.body.style.overflow = "auto  ";
    }
  },[visibile]) 

  return (
    <div className='overflow-x-hidden'>
      <div className=''>
          <div className='flex justify-between'>
              <img src={assets.logo} className='logo w-40 mt-[-22px]' alt="" />
            <ul className='mt-2 flex text-white gap-10 max-md:hidden '>
            <a  href="#Home">Home</a>
          <a  href="#Fea">Features</a>
          <a  href="#Pro">Product</a>
          <a   href="#Cli">Client</a>
            </ul>
        <div className='md:hidden  flex justify-end mt-[-25px] cursor-pointer'>
          <img src={assets.menu} alt="" className='w-7 block md:hidden' onClick={handleVisibilty} />
        </div>
          </div>
      </div>
      {/* Mobile Layout */}

      <div className={` z-50   md:hidden mobile-layout ${visibile ? "translate-x-0" : "translate-x-full"} transition-all flex flex-col text-black w-full p-10 mt-3`}>
        <ul className= 'flex flex-col justify-end gap-5 '>    
          <a onClick={()=>setVisible(false)} href="#Home">Home</a>
          <a onClick={()=>setVisible(false)} href="#Fea">Features</a>
          <a onClick={()=>setVisible(false)} href="#Pro">Product</a>
          <a  onClick={()=>setVisible(false)} href="#Cli">Client</a>
        </ul>
      </div>

    </div>
  )
}

export default Navbar 
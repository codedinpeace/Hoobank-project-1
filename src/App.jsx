import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Products from './Components/Products'
import Client from './Components/Client'
import Footer from './Components/Footer'
import LazyLoadImages from './Components/LazyLoading'

function App() {
 

  return (
   <div>
  

    <Navbar/>
    <Hero/>
    <Features/>
    <Products/>
    <Client/>
    <Footer/>
    <LazyLoadImages/> 
   </div>
  )
}

export default App

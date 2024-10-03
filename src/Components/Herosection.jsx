import React from 'react'
import Navbar from './Navbar'

function Herosection() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-screen h-[600px] bg-black">
      <div className="w-full h-full bg-[url('./assets/images/Hero_bg.png')] opacity-45 bg-cover bg-center"> 
      </div>
      </div>
      
    </div>
  )
}

export default Herosection

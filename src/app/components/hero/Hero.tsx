"use client"
import React from 'react'

import Image from 'next/image';




function Hero() {
   
  return (

<>
<div className="relative">
      <img
        src="/slideimages/s1.jpg"
        alt="Background"
        className="w-[100vw] h-[70vh] md:h-[80vh] object-cover"
      />
      {/* <video src='/airplane_take_off.mp4' className="w-[100vw] h-[70vh] md:h-[80vh] object-cover" autoPlay loop muted/> */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex px-4 items-center flex-col justify-center text-white  text-center font-bold">
        <h1 className=' text-2xl md:text-6xl text-cyan-200'>Embark on Seamless Journeys </h1>
        <p className='mt-5 md:text-1xl'> Effortlessly Navigate Your Visa Application Process with Expert Guidance and Beyond!</p>

      </div>
    </div>
</>

  )
}

export default Hero
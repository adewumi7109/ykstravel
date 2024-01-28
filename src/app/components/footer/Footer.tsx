import Link from 'next/link';
import React from 'react'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary text-white p-8 mt-16">
    <div className="container  mx-auto">
      <div className="flex flex-col  md:flex-row justify-between ">
        {/* Left side */}
        <div className="mb-4 md:mb-0">
       
          <h3 className="text-2xl font-bold mb-2 text-white">YKSTRAVEL</h3>
          <p className="text-sm mb-2">BK. OSTC off Gbongan/Ibadan Rd. Osun State</p>
          <p className="text-sm mb-2"><Link href="tel:+2347062204892">
    +2347062204892
  </Link></p>
          <p className="text-sm"><Link href="mailto:ykstravelsltd@gmail.com">
   ykstravelsltd@gmail.com
  </Link></p>
        </div>
        {/* Center */}
        <div className="mb-4 md:mb-0">    
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        {/* Right side */}
        <div>
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://api.whatsapp.com/send?phone=2347062204892" className="text-white text-3xl hover:text-gray-400">
              <FaWhatsapp/>
            </a>
            <a href="#" className="text-white text-3xl hover:text-gray-400">
            <FaTwitter/>
            </a>
            <a href="#" className="text-white text-3xl hover:text-gray-400">
             <FaFacebook/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
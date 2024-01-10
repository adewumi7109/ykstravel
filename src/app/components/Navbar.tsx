"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
 let Links = [
    {name: "Home", link:"/"},
    {name: "Service", link:"/service"},
    {name: "About", link:"/about"},
 ]
 let [open, setOpen] = useState(false)
  return (
<div className='shadow-md w-full fixed top-0 left-0 z-10'>
{/* bg-cyan-500 */}
    <div className='md:flex items-center justify-between bg-[#f7faf8] py-4 md:px-10 px-4'>
        <div className='font-bold text-2xl text-cyan-500 cursor-pointer flex items-center  '>
            YKSTRAVEL
        </div>
        <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-4 top-4 cursor-pointer text-cyan-500  md:hidden'>
     
      {/* <FaXmark/> */}
      {open ? <FaXmark/> :  <FaBars/>}
      
        </div>
        <ul className={`md:flex md:items-center text-cyan-500 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${open ? ' top-[4.2rem] opacity-100 bg-[#f7faf8]': 'top-[-490px]'} md:opacity-100 `}>
            {Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link className=' hover:text-gray-400  duration-500' href={link.link}>{link.name}</Link>
              </li>
            ))}
        </ul>
    </div>

</div>
  );
};

export default Navbar;

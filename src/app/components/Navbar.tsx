"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "About Us", link: "/#about" },
    { name: "Contact Us", link: "/#contact" },
  ];
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      {/* bg-primary */}
      <div className='md:flex items-center justify-between  bg-[white] py-4 md:px-10 px-4'>
        <div className='font-bold  cursor-pointer flex items-center  '>
       <a href="">
       <Image alt='yks_logo' src='/yks_logo.png' height={80} width={80}/>
       </a>
        </div>
        <div
          onClick={toggleMenu}
          className='text-3xl absolute right-4 top-6 cursor-pointer text-primary  md:hidden'
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center text-primary md:pb-0 pb-12  absolute md:static  md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
            open ? ' top-[4.2rem] opacity-100 bg-white' : 'top-[-490px]'
          } md:opacity-100 `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='md:ml-8 text-base md:my-0 my-7'
              onClick={closeMenu} // Close the menu on link click
            >
              <Link className=' hover:text-gray-400  duration-500' href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

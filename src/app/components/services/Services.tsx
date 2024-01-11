"use client"
import React, { useEffect } from 'react';
import { FaPassport } from "react-icons/fa6";
// import Aos from 'aos'
// import 'aos/dist/aos.css';
function Services() {
    // useEffect(() => {
    //     // Initialize ScrollReveal
    //     Aos.init();
    //   }, [])
    return (
        <div className='services  p-4 md:p-10 mt-[3rem]'>
            <h1 className='md:text-4xl text-3xl text-center text-cyan-500'>Our services</h1>
            <p className=' md:text-1xl text-center text-1xl mt-2 '>100% assurances on our services</p>
            <div className="grid mt-[3rem] grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-2 gap-8">
                <div className='bg-cyan-500 p-4 shadow-xl text-white ' data-aos ="fade-right">
                    <h1 className=' text-2xl'>School Admission Processing:</h1>
                    <ul className='mt-4 list-disc pl-4'>
                        <li>Seamless assistance in processing school admissions in Canada, the UK, and Schengen countries.
                        </li>
                        <li>Personalized guidance throughout the application process for a smooth and hassle-free experience.
                        </li>
                        <li>Expert handling of documentation and admission requirements.</li>
                    </ul>
                </div>
                <div className='bg-cyan-500 p-4 shadow-xl text-white' data-aos= "fade-left" >
                    <h1 className=' text-2xl'>Student Permit Application:</h1>
                    <ul className='mt-4 list-disc pl-4'>
                        <li>Professional support for student permit applications tailored to the specific country's regulations.
                        </li>
                        <li>Clear and concise information on eligibility criteria and required documentation.
                        </li>
                        <li>Step-by-step guidance to ensure a successful and timely application process.</li>
                    </ul>
                </div>
                <div className='bg-cyan-500 p-4 shadow-xl text-white' data-aos= "fade-right">
                    <h1 className=' text-2xl'>Step-by-Step Application Process:</h1>
                    <ul className='mt-4 list-disc pl-4'>
                        <li>Detailed walkthrough of the entire application process to eliminate confusion.
                        </li>
                        <li>Comprehensive assistance in filling out application forms accurately.
                        </li>
                        <li>Ongoing support and updates to keep applicants informed at every stage.</li>
                    </ul>
                </div>
                <div className='bg-cyan-500 p-4 shadow-xl text-white' data-aos= "fade-left" >
                    <h1 className=' text-2xl'>Guidance on Flight Booking, Pre-departure Briefing, and Insurance Booking:</h1>
                    <ul className='mt-4 list-disc pl-4'>
                        <li>Expert advice on booking flights to ensure cost-effectiveness and convenience.
                        </li>
                        <li>Informative pre-departure briefings covering essential details for a smooth transition.
                        </li>
                        <li>Assistance in securing comprehensive insurance coverage for peace of mind during the entire stay.</li>
                    </ul>
                </div>
                <div className='bg-cyan-500 p-4 shadow-xl text-white' data-aos= "fade-right">
                    <h1 className=' text-2xl'>Guidance on Accommodation/Hostel Booking:</h1>
                    <ul className='mt-4 list-disc pl-4'>
                        <li>Personalized recommendations and support in securing suitable accommodation or hostel.
                        </li>
                        <li>Assistance in navigating the booking process to secure favorable rates.
                        </li>
                        <li>Ensuring accommodation options align with the student's preferences and budget.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services
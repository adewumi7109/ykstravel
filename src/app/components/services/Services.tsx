"use client"
import React, { useEffect } from "react";
import { FaPassport } from "react-icons/fa6";
// import Aos from "aos"
// import "aos/dist/aos.css";
function Services() {
    // useEffect(() => {
    //     // Initialize ScrollReveal
    //     Aos.init();
    //   }, [])
    return (
        <div className="services bg-primary  p-4 md:p-10 " id="services">
            <h1 className="md:text-4xl text-3xl text-center mt-[3rem] text-white">Our services</h1>
            <p className=" md:text-1xl text-center text-1xl mt-2 text-white">100% assurances on our services</p>
            <div className="grid mt-[3rem] grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-8">
                <div className="bg-[white]  rounded p-4 shadow-xl  " data-aos="fade-right">
                    <h1 className="text-2xl text-primary font-bold">Professional Assistance for Working Visa Processing:</h1>
                    <ul className="mt-4 list-disc text-[#696866] pl-4">
                        <li>Our services extend to comprehensive support for working visa applications through a meticulous process led by experienced travel agents.</li>
                        <li>Tailoring our approach to the specific regulations of destination countries, including but not limited to Canada, the UK, and Schengen nations.</li>
                        <li>Guiding clients step-by-step through the intricate process, ensuring a successful and timely application and addressing country-specific nuances.</li>
                    </ul>
                </div>
                <div className="bg-primary rounded  p-4 shadow-xl text-white" data-aos="fade-left">
                    <h1 className="text-2xl font-bold">
Student Visa Application Support:</h1>
                    <ul className="mt-4 list-disc pl-4">
                        <li>Tailored professional assistance for student visa applications, conforming to the regulations of specific countries like Canada, the UK, and Schengen nations.</li>
                        <li>Providing clear and concise information on eligibility criteria and the required documentation to ensure a smooth application process.</li>
                        <li>Step-by-step guidance to ensure a successful and timely student visa application, with special attention to the distinctive requirements of Canada, the UK, and Schengen countries.</li>
                    </ul>
                </div>
                <div className=" bg-[white] rounded p-4 shadow-xl " data-aos="fade-right">
                    <h1 className="text-2xl text-primary font-bold">Step-by-Step Application Process:</h1>
                    <ul className="mt-4 list-disc pl-4 text-[#696866] ">
                        <li>Detailed walkthrough of the entire application process to eliminate confusion.</li>
                        <li>Comprehensive assistance in filling out application forms accurately.</li>
                        <li>Ongoing support and updates to keep applicants informed at every stage.</li>
                    </ul>
                </div>
                <div className="bg-primary rounded p-4 shadow-xl text-white" data-aos="fade-left">
                    <h1 className="text-2xl font-bold">Guidance on Flight Booking, Pre-departure Briefing, and Insurance Booking:</h1>
                    <ul className="mt-4 list-disc pl-4">
                        <li>Expert advice on booking flights to ensure cost-effectiveness and convenience.</li>
                        <li>Informative pre-departure briefings covering essential details for a smooth transition.</li>
                        <li>Assistance in securing comprehensive insurance coverage for peace of mind during the entire stay.</li>
                    </ul>
                </div>
                <div className="bg-[white] rounded p-4 shadow-xl " data-aos="fade-right">
                    <h1 className="text-2xl text-primary font-bold">Guidance on Accommodation/Hostel Booking:</h1>
                    <ul className="mt-4 list-disc pl-4 text-[#696866] ">
                        <li>Personalized recommendations and support in securing suitable accommodation or hostel.</li>
                        <li>Assistance in navigating the booking process to secure favorable rates.</li>
                        <li>Ensuring accommodation options align with the student&apos;s preferences and budget.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;

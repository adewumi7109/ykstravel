import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary text-white p-8 mt-16">
    <div className="container  mx-auto">
      <div className="flex flex-col  md:flex-row justify-between ">
        {/* Left side */}
        <div className="mb-4 md:mb-0">
       
          <h3 className="text-2xl font-bold mb-2 text-white">YKSTRAVEL</h3>
          <p className="text-sm mb-2">BK. OSTC off Dbongan/Ibadan Rd. Osun State</p>
          <p className="text-sm mb-2">+2347062204892</p>
          <p className="text-sm">ykstravelsltd@gmail.com</p>
        </div>
        {/* Center */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        {/* Right side */}
        <div>
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h9v-7h-3v-3h3V8.46a4 4 0 011.17-2.83 3.91 3.91 0 012.83-1.17 4 4 0 012.83 1.17A3.91 3.91 0 0121 8.46V10h-2V8.46A4 4 0 0116.17 4a3.91 3.91 0 012.83-1.17 4 4 0 012.83 1.17A3.91 3.91 0 0121 8.46V10h2V3a1 1 0 00-1-1z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2zm0-8h-2V7h2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm-1 14h-3v-2h3v2zm-4-4H7v-2h7v2zm4-4H7V7h10v5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
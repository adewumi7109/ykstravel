import React from 'react'

function Contact() {
  return (
    <section className="bg-gray-100 p-4 md:p-10 py-16">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us for any inquiries or feedback.
          </p>
          <p className="text-gray-600 mb-4">
          YKSTravel  is happy to assist you!
          </p>
          <ul className=" list-none text-gray-600">
            <li>Email: ykstravelsltd@gmail.com</li>
            <li>Phone: +2347062204892</li>
            <li>Address: BK. OSTC off Dbongan/Ibadan Rd. Osun State</li>
          </ul>
        </div>
        {/* Right column */}
        <form className="bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea id="message" name="message"  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact
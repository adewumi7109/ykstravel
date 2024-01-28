"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_name: 'Adewumi' // Set a default value for to_name
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Validate fields
    if (name === 'name') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        name: value.trim() ? '' : 'Name is required',
      }));
    } else if (name === 'email') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: value.trim() ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address') : 'Email is required',
      }));
    } else if (name === 'message') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        message: value.trim() ? '' : 'Message is required',
      }));
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Check for empty fields
    const emptyFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');
    if (emptyFields.length > 0) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        ...Object.fromEntries(emptyFields.map(([key]) => [key, `${key.charAt(0).toUpperCase() + key.slice(1)} is required`])),
      }));
      return;
    }

    // Check for any remaining validation errors
    if (Object.values(validationErrors).some((error) => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    emailjs.send(
      'service_mkxmbpf',
      'template_cq35ibb',
      formData,
      'eqhQ8-Fgdp3AFWxSG'
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmissionStatus('success');
        // Do not reset to_name to an empty string
        setFormData({
          name: '',
          email: '',
          message: '',
          to_name: formData.to_name, // Retain the value for to_name
        });
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setSubmissionStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id='contact' className="bg-gray-100 p-4 md:p-10 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us for any inquiries or feedback.
            </p>
            <p className="text-gray-600 mb-4">
              YKSTravel is happy to assist you!
            </p>
            <ul className="list-none text-gray-600">
              <li className='mb-2'>
                Email:{' '}
                <Link href="mailto:ykstravelsltd@gmail.com">
                  ykstravelsltd@gmail.com
                </Link>
              </li>
              <li className='mb-2'>
                Phone:{' '}
                <Link href="tel:+2347062204892">+2347062204892</Link>
              </li>
              <li className='mb-2'>
                Address: BK. OSTC off Gbongan/Ibadan Rd. Osun State
              </li>
            </ul>
          </div>
          {/* Right column */}
          <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
           
            {submissionStatus === 'error' && (
              <p className="text-red-500">
                Error sending message. Please try again later.
              </p>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {validationErrors.name && <p className="text-red-500">{validationErrors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {validationErrors.email && <p className="text-red-500">{validationErrors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
              {validationErrors.message && <p className="text-red-500">{validationErrors.message}</p>}
            </div>
            {submissionStatus === 'success' && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

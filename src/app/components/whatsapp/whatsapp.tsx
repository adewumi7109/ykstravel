// WhatsAppButton.js
"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '2347062204892'; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="whatsapp-button"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#25D366',
        color: '#FFF',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;

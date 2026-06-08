'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TENTANG KAMI</h3>
          <p>Website resmi informasi wisata Gunung Bromo, menyediakan panduan lengkap untuk liburan Anda.</p>
        </div>
        
        <div className="footer-section">
          <h3>KONTAK</h3>
          <p>Email: info@bromowisata.com</p>
          <p>Telepon: (0341) 123456</p>
          <p>Probolinggo, Jawa Timur</p>
        </div>
        
        <div className="footer-section">
          <h3>JAM OPERASIONAL</h3>
          <p>Senin - Minggu: 08.00 - 20.00</p>
          <p>Layanan Darurat: 24 Jam</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Wisata Bromo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
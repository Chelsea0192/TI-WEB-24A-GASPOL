'use client';

import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function InfoWisataPage() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <div className="info-section">
      <h2>Informasi Wisata Gunung Bromo</h2>
      <p>Berikut adalah informasi lengkap yang perlu Anda ketahui sebelum berkunjung ke Gunung Bromo.</p>

      <div className="info-grid">
      <div className="info-card">
        <h3>Harga Tiket Masuk</h3>
        <ul className="info-list">
          <li>Wisatawan Domestik: Rp 30.000 - Rp 50.000</li>
          <li>Wisatawan Asing: Rp 150.000 - Rp 300.000</li>
          <li>Kendaraan Roda 2: Rp 10.000</li>
          <li>Kendaraan Roda 4: Rp 25.000</li>
          <li>Sewa Jeep: Rp 400.000 - Rp 600.000</li>
        </ul>
      </div>
         <div className="info-card">
           <h3>Jalur Pendakian</h3>
          <ul className="info-list">
           <li>Jalur Cemorolawang (paling populer)</li>
          </ul>
         </div>
      </div>
    </div>
    </div>
    </>
  );
}
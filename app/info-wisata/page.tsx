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
    </div>
    </div>
    </>
  );
}
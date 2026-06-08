'use client';

import React from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <section className="hero">
      <div className="container">
        <h1>Selamat Datang di Wisata Bromo</h1>
        <p>Nikmati keindahan alam yang memukau di Gunung Bromo, Jawa Timur</p>
      </div>
      </section>

       <div className="container">
       <section className="overview-section">
        <h2>Overview Website Wisata Bromo</h2>
        <p>Selamat datang di portal informasi wisata Gunung Bromo yang lengkap dan terpercaya.
           Website ini hadir untuk membantu Anda merencanakan perjalanan wisata ke Gunung Bromo dengan lebih mudah dan menyenangkan.</p>

       </section>
       </div>
      <Footer/>
    </>
  );
}
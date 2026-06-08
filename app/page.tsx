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
        <p>Gunung Bromo merupakan salah satu destinasi wisata unggulan Indonesia yang terkenal hingga mancanegara.
           Dengan ketinggian 2.329 meter di atas permukaan laut, Bromo menawarkan pemandangan alam yang luar biasa indah.</p>
      
      <div className="overview-list">
      <div className="overview-item">
        <strong>Halaman Gunung Bromo</strong>
        <p>Pelajari sejarah, keunikan, dan keindahan Gunung Bromo secara mendalam. Temukan fakta-fakta menarik tentang gunung berapi aktif ini.</p>
      </div>

      <div className="overview-item">
        <strong>Halaman Info Wisata</strong>
        <p>Dapatkan informasi lengkap tentang harga tiket masuk, jalur pendakian terbaik, akomodasi, transportasi, dan tips berkunjung.</p>

      </div>
      </div>
       </section>
       </div>
      <Footer/>
    </>
  );
}
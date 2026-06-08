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
      </div>
      </section>
      <Footer/>
    </>
  );
}
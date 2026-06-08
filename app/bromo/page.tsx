'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

  export default function BromoPage() {
  return (
    <>
     
      <Navbar />
      <div className="container">
      <div className="bromo-content">
        <h2>Mengenal Gunung Bromo</h2>
        <p>Gunung Bromo adalah salah satu gunung berapi paling terkenal di Indonesia, terletak di Jawa Timur.
         Dengan ketinggian 2.329 meter di atas permukaan laut, Bromo menawarkan pemandangan yang spektakuler, 
         terutama saat matahari terbit.</p>
        <p>Gunung ini masih aktif dan terakhir meletus pada tahun 2019. Meskipun demikian, Bromo tetap menjadi 
        destinasi wisata favorit bagi wisatawan lokal maupun mancanegara.</p>


      </div>
      </div>
      <Footer />
    </>
  );
}
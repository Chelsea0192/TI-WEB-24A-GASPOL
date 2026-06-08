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

        <h3>Keunikan Gunung Bromo</h3>
        <div className="bromo-features">
        <div className="feature">
        <h3>Kawah Aktif</h3>
        <p>Kawah Bromo yang masih aktif mengeluarkan asap belerang, menciptakan pemandangan yang dramatis dan magis.</p>
      </div>
      
      <div className="feature">
        <h3>Sunrise Terbaik</h3>
        <p>Spot matahari terbit di Penanjakan yang terkenal sebagai salah satu sunrise terindah di dunia.</p>
      </div>
      <div className="feature">
        <h3>Lautan pasir</h3>
        <p>Hamparan pasir vulkanik seluas 10 kilometer persegi yang mengelilingi Gunung Bromo.</p>
      </div>
    </div>
    <h3>Sejarah Singkat</h3>
    <p>Menurut legenda, Gunung Bromo berasal dari kata Brahma yang merupakan dewa Hindu. 
      Masyarakat sekitar masih melestarikan tradisi upacara Kasada setiap tahunnya sebagai bentuk penghormatan.</p>

      </div>
      </div>
      <Footer />
    </>
  );
}
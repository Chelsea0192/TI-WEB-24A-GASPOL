'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HubungiKamiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <div className="container">
    <div className="contact-info">
        <h2>Informasi Kontak</h2>
    
    <div className="contact-item">
        <strong>Alamat Kantor</strong>
        <p>Jl. Raya Bromo No. 123, Probolinggo, Jawa Timur</p>
    </div>

    <div className="contact-item">
        <strong>Telepon</strong>
        <p>(0341) 123456</p>
        <p>0812-3456-7890 (WhatsApp)</p>
    </div>

    <div className="contact-item">
        <strong>Email</strong>
        <p>info@bromowisata.com</p>
        <p>reservation@bromowisata.com</p>
    </div>

    <div className="contact-item">
        <strong>Jam Layanan</strong>
        <p>Senin - Minggu: 08.00 - 20.00 WIB</p>
        <p>24 jam untuk layanan darurat</p>
        <p>24 jam untuk layanan darurat</p>
        </div>
    </div>

    <div className="contact-form">
        <h2>Kirim Pesan</h2>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
             <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
             />
        </div>

        <div className="form-group">
           <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        </form>
    </div>
    </div>

    <Footer />
  </>
);
}
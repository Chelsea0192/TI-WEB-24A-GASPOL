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
    
    </div>
    </div>

    <Footer />
  </>
);
}
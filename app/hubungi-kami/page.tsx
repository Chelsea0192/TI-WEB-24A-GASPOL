'use client';

import React, { useState } from 'react'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HubungiKamiPage() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
});

  const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);



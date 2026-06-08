'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Bromo', path: '/bromo' },
    { name: 'Info Wisata', path: '/info-wisata' },
    { name: 'Hubungi Kami', path: '/hubungi-kami' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                className={pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
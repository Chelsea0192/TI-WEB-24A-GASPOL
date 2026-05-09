'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
     const pathname = usePathname()
     const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Bromo', path: '/bromo' },
    { name: 'Info Wisata', path: '/info-wisata' },
    { name: 'Hubungi Kami', path: '/hubungi-kami' },
  ]

  return (
  <nav className="navbar">
      <div className="navbar-container">
      <Link href="/" className="navbar-logo">
        🌋 Wisata Bromo
      </Link>
       <ul className="nav-menu">
         {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
                href={item.path} 
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                {item.name}
            </Link>
          </li>

        ))}


       </ul>
    </div>
  </nav>
)
}
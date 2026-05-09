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

}
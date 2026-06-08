import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wisata Bromo - Pesona Gunung Bromo Jawa Timur',
  description: 'Website resmi informasi wisata Gunung Bromo, destinasi wisata terbaik di Jawa Timur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
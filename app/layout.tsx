import type { Metadata } from 'next';
import './site.css';
export const metadata: Metadata = { title: 'PINE+ | Restoring Mongolia’s Siberian Pine Forests', description: 'A long-term initiative to restore Mongolia’s Siberian pine forests through community-led restoration, technical expertise and lasting partnerships.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html> }

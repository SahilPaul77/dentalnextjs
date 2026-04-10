import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './navbar/page.jsx'
import Footer from './footer/page.jsx'
import Image from 'next/image' 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bright Smile | Best Dentist in Ludhiana  ",
  description: "Experienced dentist in Ludhiana. Book appointment for root canal, teeth cleaning, braces and more.",
  openGraph:{
  title: "Bright Smile | Best Dentist in Ludhiana",
  description: "Experienced dentist in Ludhiana. Book appointment for root canal, teeth cleaning, braces and more.",
  images: [
  {
    url: "https://dentalnextjs.vercel.app/images/hero2.jpg",
    width: 500,
    height: 300,
  }
  ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

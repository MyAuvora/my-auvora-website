import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auvora - AI CRM built for real-world operators",
  description: "Auvora helps fitness studios, micro schools, daycares, wellness practices, and local service businesses stop losing leads and start growing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

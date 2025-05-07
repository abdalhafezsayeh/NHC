import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Nabar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NHC National Housing Company",
  description: "NHC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

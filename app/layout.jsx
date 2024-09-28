import localFont from "next/font/local";
import "./globals.css";

import Mesh from "@/components/mesh";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Frontend resources",
  description: "All useful frontend tools in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Mesh />
        {children}
        <Footer />
      </body>
    </html>
  );
}

"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/global/Sidebar";
import Navbar from "@/components/global/Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/watch";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar onToggle={toggleSidebar} />
        {showSidebar && <Sidebar isOpen={isSidebarOpen} />}

        <main
          className={`transition-all duration-300 ${
            isSidebarOpen
              ? "ml-0 md:ml-40 lg:ml-[16%]"
              : "ml-[15%] md:ml-[5.8%] lg:ml-[4.8%]"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

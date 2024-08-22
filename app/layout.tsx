'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from "@mui/material";
import { theme } from "@/library/themes";
import { Footer, Navbar } from "./components";
import AppContext from "./context/AppContext";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

useEffect(() => {
  const setBodyHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
  };

  window.addEventListener('resize', setBodyHeight);
  setBodyHeight(); // Initial call

  return () => {
    window.removeEventListener('resize', setBodyHeight);
  };
}, []);

  return (
    <html lang="en">
      <body className={inter.className}>

        <AppRouterCacheProvider options={{key: 'css',  enableCssLayer: true }}>
          <AppContext>
            <ThemeProvider theme={theme}>
              <Navbar />
              {children}
              {/* <Footer />               */}
            </ThemeProvider>
          </AppContext>
        </AppRouterCacheProvider>        
      
      </body>
    </html>
  );
}

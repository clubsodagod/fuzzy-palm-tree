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
import { SessionProvider } from "next-auth/react";


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
  setBodyHeight(); 
  

  return () => {
    window.removeEventListener('resize', setBodyHeight);
  };
}, []);

  return (
    <html lang="en">

        <AppRouterCacheProvider options={{key: 'css',  enableCssLayer: true }}>
          <SessionProvider>
            <AppContext>
              <ThemeProvider theme={theme}>
                
                  {children}
                
                {/* <Footer />               */}
              </ThemeProvider>
            </AppContext>            
          </SessionProvider>
        </AppRouterCacheProvider>        
    </html>
  );
}

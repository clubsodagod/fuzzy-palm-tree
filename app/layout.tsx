import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppProvider from "./_context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import DefaultLayout from "./_components/common/layouts/DefaultLayout";
import { AnimatePresencePro } from "./_components/common/framer/AnimatePresencePro";
import { SessionProvider } from "next-auth/react";
import ContextLayer from "./_components/common/layouts/AppContextLayer";
import { baseUrl } from "./_library/const/nav";

console.log(baseUrl);


export const metadata: Metadata = {
  title: "Maliek Davis",
  description: "The Future",
  metadataBase: new URL(`${baseUrl}`),

};


export const viewport: Viewport = {
  themeColor: '#3494E6',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"

    >
      <ContextLayer>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </ContextLayer>


    </html>
  );
}

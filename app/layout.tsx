import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppProvider from "./_context/AppContext";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import DefaultLayout from "./_components/common/layouts/DefaultLayout";
import { AnimatePresencePro } from "./_components/common/framer/AnimatePresencePro";


export const metadata: Metadata = {
  title: "Maliek Davis",
  description: "The Future",
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    capable: true,

  },

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

      <AppProvider>
        <AppRouterCacheProvider
          options={{ key: 'css', enableCssLayer: true }}
        >
          <AnimatePresencePro>
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </AnimatePresencePro>

        </AppRouterCacheProvider>

      </AppProvider>

    </html>
  );
}

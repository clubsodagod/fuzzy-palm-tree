'use client'
import AppProvider from "@/app/_context/AppContext"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"
import { AnimatePresencePro } from "../framer/AnimatePresencePro"



const ContextLayer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            <AppProvider>
                <AppRouterCacheProvider
                    options={{ key: 'css', enableCssLayer: true }}
                >
                    <AnimatePresencePro>
                        {children}
                    </AnimatePresencePro>
                </AppRouterCacheProvider>
            </AppProvider>
        </SessionProvider>




    )
}

export default ContextLayer
'use client'
import React from 'react';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';


const AppContainer:React.FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <AnimatePresence>
            <div className="app-ctn">
                {children}
                <Footer />
            </div>            
        </AnimatePresence>

    )
}

export default AppContainer
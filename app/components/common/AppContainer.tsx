'use client'
import React, { RefObject } from 'react';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '..';


const AppContainer:React.FC<{children:React.ReactNode, ctnRef:RefObject<HTMLDivElement>}> = ({children, ctnRef}) => {
    return (
                <AnimatePresence>
                <body  className="app-ctn">
                    <Navbar/>
                    <div ref={ctnRef} className={`app-ctn`}>
                        {children} 
                    </div>
                        
                </body>       
                </AnimatePresence>  

    )
}

export default AppContainer
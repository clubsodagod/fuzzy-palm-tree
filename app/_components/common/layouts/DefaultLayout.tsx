'use client'
import React, { ReactNode, useEffect } from 'react'
import { MotionBody } from '../framer/MotionBody'
import { useAppContext } from '@/app/_context/AppContext'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/app/_library/themes'
import Navbar from '../Navbar'
import { gradientVariants } from '@/app/_library/const/gradient-variants'
import { useScroll } from 'framer-motion'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    // access: ctnRef, controls, gradientVariants
    const {
        appContainer: {
            scrollRef,
            controls,
        }
    } = useAppContext()

    const { scrollY } = useScroll({ container: scrollRef, });


    const scrollYPro = scrollY.get();
    const scrollYProPrevious = scrollY.getPrevious();

    useEffect(() => {
        if (scrollYPro !== scrollYProPrevious) {
            console.log(scrollYPro);

        }
    }, [scrollYPro, scrollYProPrevious])



    return (
        <>

            <ThemeProvider theme={theme}>
                <MotionBody
                    id='default-body'
                    animate={controls}
                    variants={gradientVariants}
                >
                    <main
                        className='main'
                        ref={scrollRef}
                    >
                        <Navbar />
                        {children}
                    </main>

                </MotionBody>
            </ThemeProvider>


        </>


    )
}

export default DefaultLayout
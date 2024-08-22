'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const OuterSceneWrapper:React.FC<{
    children:React.ReactNode,
    id?:string,
}> = ({
    children,
    id,
}) => {
    return (
            <AnimatePresence>
                <section className={`outerSceneWrapper `} id='home'>  
                        {children}
                </section>
            </AnimatePresence>
    )
}

export default OuterSceneWrapper
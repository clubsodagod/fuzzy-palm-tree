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
        <section className={`outerSceneWrapper `} id='home'>  
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </section>
    )
}

export default OuterSceneWrapper
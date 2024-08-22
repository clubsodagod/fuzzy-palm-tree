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
                        {children}
                </section>
    )
}

export default OuterSceneWrapper
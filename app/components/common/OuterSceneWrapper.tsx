'use client'
import { AnimatePresence } from 'framer-motion'
import React, { RefObject } from 'react'

const OuterSceneWrapper:React.FC<{
    children:React.ReactNode,
    id?:string,
    ctnRef?:RefObject<HTMLDivElement>
}> = ({
    children,
    id,
    ctnRef,
}) => {
    return (
                <div ref={ctnRef} className={`outerSceneWrapper `} id='home'>  
                        {children}
                </div>
    )
}

export default OuterSceneWrapper
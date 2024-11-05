
'use client'
import React, { RefObject, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

const SectionWrapper:React.FC<{
    children:React.ReactNode,
    id?:string,
    ctnRef?:RefObject<HTMLDivElement>
}> = ({
    children,
    id,
    ctnRef
}) => {

useEffect(() => {
    {ctnRef && ctnRef}
})
    return (
        <motion.div
        ref={ctnRef!}
        id={id?id:''}
        className={`${styles.sectionWrapper} section-wrapper`}
        >
            {/* name */}
            {children}
        </motion.div>
    )
}

export default SectionWrapper
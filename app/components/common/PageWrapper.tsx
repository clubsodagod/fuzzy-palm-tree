
'use client'
import React, { RefObject, useEffect, useRef } from 'react'
import styles from '../investment-page/investments.module.css'
import { motion, useTransform, useScroll } from 'framer-motion'
// import { useScroll } from '@/app/context/sub-context/ScrollContext'

const PageWrapper:React.FC<{
    children:React.ReactNode,
    id?:string,
    ctnRef?:RefObject<HTMLDivElement>
}> = ({
    children,
    id,
    ctnRef
}) => {


    return (
        <motion.div
        ref={ctnRef}
        id={id?id:''}
        className={`${styles.pageWrapper} page-wrapper`}
        >
            {/* name */}
            {children}
        </motion.div>
    )
}

export default PageWrapper
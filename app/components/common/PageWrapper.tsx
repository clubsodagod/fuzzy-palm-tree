
'use client'
import React from 'react'
import styles from '../investment-page/investments.module.css'
import { motion } from 'framer-motion'

const PageWrapper:React.FC<{
    children:React.ReactNode,
    id?:string,
}> = ({
    children,
    id,
}) => {
    return (
        <motion.div
        className={`${styles.pageWrapper}`}
        id={id?id:""}
        initial={{
            opacity:0,
            y:50,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                duration: 1,
                delay:0.6,
            }
        }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper
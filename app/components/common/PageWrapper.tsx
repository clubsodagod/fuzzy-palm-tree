
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
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper
'use client'


import React from 'react'
import styles from '../investment-page/investments.module.css'
import { motion } from 'framer-motion';

const HeroButtonCtn:React.FC<{
    children:React.ReactNode,
    id?:string,
}> = ({
    children,
    id,
}) => {
    return (
        <motion.div
        className={`${styles.btnCtn}`}
        id={id}>
            {children}
        </motion.div>
    )
}

export default HeroButtonCtn
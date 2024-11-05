import React, { RefObject, useEffect } from 'react'
import styles from './styles.module.css';
import { motion } from 'framer-motion'

const ComponentWrapper:React.FC<{
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
        className={`${styles.componentWrapper} component-wrapper`}
        >
            {/* name */}
            {children}
        </motion.div>
    )
}



export default ComponentWrapper;
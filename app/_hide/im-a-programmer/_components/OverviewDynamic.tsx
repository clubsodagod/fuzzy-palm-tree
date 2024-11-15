'use client'



import React, { RefObject, useEffect, useState } from 'react';
import { PageWrapper } from '@/app/_hide/_components';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Chapter } from '@/library/const';

const OverViewTwo:React.FC<{
    chapter:Chapter,
    ctnRef?:RefObject<HTMLDivElement>,
    index:number,
    id:string
}> = ({
    chapter:{chapter},
    ctnRef,
    index,
    id
}) => {
        

    

    return (
        <PageWrapper
        id={id}
        ctnRef={ctnRef}
        >
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.overviewCtn} overview-ctn`}
            >

                <motion.h4 
                className={`${styles.storyText} story-text`}
                >
                    {chapter}
                </motion.h4>

            </motion.div>
        </PageWrapper>
    )
}

export default OverViewTwo
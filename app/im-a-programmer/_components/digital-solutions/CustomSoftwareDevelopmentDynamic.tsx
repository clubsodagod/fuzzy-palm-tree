'use client'
import React, { RefObject, useEffect, useState } from 'react';
import { ExtendedPointUseCase, Point } from '@/library/const';
import { PageWrapper } from '@/app/components';
import { numberToWord } from '@/utility/functions';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';

const CustomSoftwareDevelopmentDynamic:React.FC<{
    factor:ExtendedPointUseCase,
    left:string,
    ctnRef:RefObject<HTMLDivElement>,
    index:number
}> = ({
    factor:{
        label,
        point,
        useCase,
    },
    left,
    ctnRef,
    index
}) => {
    const [id, setId] = useState<string>(`custom-software-dynamic-${numberToWord(index)}`);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(()=> {

        setId(id)
    }, [id]);

        return (
            <PageWrapper
            ctnRef={ctnRef} 
            id={id}
            >
            

                {/*  Top Typography Ctn */}
                <motion.div 
                className={`${styles.overviewCtn} overview-ctn`}
                >

                    {!animationComplete && (
                        <motion.h4
                        initial={{ opacity: 0.5 }}
                        whileInView={{
                            opacity: 1,
                            transition: {  duration: 5 }
                        }}
                        onAnimationComplete={() => setAnimationComplete(!animationComplete)}
                        className={`${styles.storyText} story-text`}
                        >
                            {point}
                        </motion.h4>
                        )
                    }
                    
                    {animationComplete && (
                        <motion.h4 
                        initial={{opacity:1}}
                        whileInView={{
                            opacity:0.5,
                            transition:{
                                duration:5
                            }
                        }}
                        
                        onAnimationComplete={() => {setTimeout(()=>{setAnimationComplete(!animationComplete)}, 5000)}}
                        className={`${styles.storyText} story-text`}
                        >
                            {useCase}
                        </motion.h4>  
                        )
                    }
  
                    

                </motion.div>
            </PageWrapper>
        
    )
}

export default CustomSoftwareDevelopmentDynamic
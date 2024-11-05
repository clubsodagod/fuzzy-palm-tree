'use client'


import React, { RefObject } from 'react';
import { Header, PageWrapper } from '@/app/_components';
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Button } from '@mui/material';



const WhyDigitalSolutions:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    return (
        
            <PageWrapper
            id='programmer-why-digital'
            ctnRef={ctnRef}
            >

                <Header 
                headerLabel='The Power of Digital Solutions'
                tagLine='Harnessing the Power of Technology to Drive Success'
                size='sm'
                />
                
          

                {/*  Bottom Container for navigation buttons */}
                <motion.div 
                className={`${styles.btmHeroCtn} btm-hero-ctn right`}
                >

                    <motion.p className={`${styles.excerpt} excerpt right`}>
                        Discover how digital solutions can be just what you need.
                    </motion.p>
                    <motion.div className={`${styles.btnCtn} btnCtn rightBtn`}>

                        <Button variant="contained" href={`/im-a-programmer/approach`}>
                            Approach
                        </Button>

                        <Button variant="contained">
                            My Work
                        </Button>
                    </motion.div>
                </motion.div>

            </PageWrapper>
    )
}

export default WhyDigitalSolutions
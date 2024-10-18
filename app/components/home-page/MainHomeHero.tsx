import { firstName, lastName } from '@/library/const'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import PageWrapper from '../common/PageWrapper'
import styles from './home-page.module.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { relative } from 'path';

const MainHomeHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
        <PageWrapper
        id='home-main'
        ctnRef={ctnRef}
        >

                <div className={`${styles.imgWrapper}`} id='img-maliek_home'>
                    <motion.img 
                        src='/images/programmer.png' 
                        className={`${styles.ftImg} `} 
                        id='home' alt=''  
                        initial={{
                            opacity: 0,
                            y:-200,
                        }}
                        whileInView={{opacity:1,
                            y:0,
                            transition:{
                                duration:1,
                                delay:2.4,
                            },
                        }}
                        exit={{opacity:0}}
                        
                    />
                </div>
                <motion.div className={`${styles.topTextCtn} left`} id='home' >
                    <motion.h1 
                        className={`${styles.investHeaderMain} left`} 
                        id='home'
                        initial={{
                            opacity: 0,
                            y:25,
                        }}
                        whileInView={{opacity:1,
                            y:0,
                            transition:{
                                duration:1,
                                delay:1.6,
                            }
                        }}
                    >
                        {firstName.toUpperCase()} {lastName.toUpperCase()}
                    </motion.h1>
                    <motion.h6
                        className={`${styles.investSubheader} left`}  
                        id='home'
                        initial={{
                            opacity: 0,
                            y:25,
                        }}
                        whileInView={{opacity:1,
                            y:0,
                            transition:{
                                duration:1,
                                delay:2,
                            }
                        }}
                    >
                        Where Innovation Meets Opportunity.
                    </motion.h6>                       
                </motion.div>
                

                <div
                className={`${styles.btnGroup}`}  id='home'
                >
                    <ExpandCircleDownOutlinedIcon className={`hero-auto-scroll-btn ${styles.autoScrollBtn}`} id={'home'} />
                </div>                


        </PageWrapper> 
    )
}

export default MainHomeHero
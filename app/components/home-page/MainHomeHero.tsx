import { firstName, lastName } from '@/library/const'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import PageWrapper from '../common/PageWrapper'
import styles from './home-page.module.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

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

                <motion.div className={`${styles.topTextCtn} `} id='home' >
                    <motion.h1 
                        className={`${styles.investHeader} `} 
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
                        className={`hero-h6 ${styles.investSubheader}`}  
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
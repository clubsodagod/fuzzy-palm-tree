'use client'
import { firstName, lastName } from '@/library/const'
import React from 'react'
import { HomeScene } from '../scenes'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform, } from 'framer-motion';
import styles from './home-page.module.css'
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';

const HomeHero = () => {

    const { scrollYProgress, scrollY } = useScroll();

    const scale = useTransform(scrollYProgress,[0,0.2], [1,0]);
    const x = useTransform(scrollYProgress,[0,0.2],[0,25])
    const opacity = useTransform(scrollYProgress,[0,0.2], [1,0])

    return (
            <OuterSceneWrapper>    
                    <div className={`${styles.imgWrapper}`} id='img-maliek_home'>
                        <motion.img 
                            src='/temporary/images/maliek-davis-home.jpg' 
                            className={`${styles.ftImg}`} 
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
                    <section className='three-scene'>
                        <HomeScene />
                    </section>
                    <PageWrapper
                    id='home'
                    >

                            <motion.div className={`${styles.textBox}`} id='home' >
                                <motion.h1 
                                    className={`hero-h1 ${styles.heroH1}`} 
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
                                    className={`hero-h6 ${styles.heroH6}`}  
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
            </OuterSceneWrapper>

    )
}

export default HomeHero
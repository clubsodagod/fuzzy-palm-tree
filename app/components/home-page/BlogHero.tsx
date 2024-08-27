"use client"
import { blogHeroH1 } from '@/library/const'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { BlogScene, HomeScene } from '../scenes'
import styles from './home-page.module.css'
import { Button } from '@mui/material'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import PageWrapper from '../common/PageWrapper'

const BlogHero = () => {
    return (
            <PageWrapper id='blog'>
            
                    
                    <motion.div className={`${styles.topTextCtn} right`} id='blog' >
                        <motion.h1 
                                className={`${styles.heroH3} right`}
                                id='blog'
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                        >
                            {blogHeroH1}
                        </motion.h1>                  
                    </motion.div>
                    
                    <motion.div className={`${styles.heroP_Ctn} right`} id='investments'>
                        <motion.p 
                        className={`${styles.heroP}`} 
                        id='blog'
                        initial={{opacity: 0}}
                        whileInView={{opacity:1}}
                        >
                            Exploring the intersections of technology and life, and then everything in between. <span className="check-out-blog-span" id="blog">Check out my Blog.</span>
                        </motion.p>  

                        <motion.div
                        className={`${styles.btnCtn} rightBtn`}
                        id='home-investment-hero'
                        >

                                            <Button
                                            variant='outlined'
                                            className={`learn-more-btn`}
                                            id={'home-investment-hero'}
                                            href={'/blog'}
                                            >
                                                More Posts
                                            </Button>
                                            <Button
                                            variant='contained'
                                            className={`partnership-btn`}
                                            id={'home-investment-hero'}
                                            href={'/blog/subscribe'}
                                            >
                                                Subscribe
                                            </Button>
                                            
                        </motion.div>    

                    </motion.div>

                    




            </PageWrapper>

    )
}

export default BlogHero
"use client"
import { blogHeroH1 } from '@/library/const'
import { AnimatePresence, motion } from 'framer-motion'
import React, { RefObject } from 'react'
import { BlogScene, HomeScene } from '../scenes'
import styles from './home-page.module.css'
import { Button } from '@mui/material'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import PageWrapper from '../common/PageWrapper'
import Header from '../common/Header'

const BlogHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    return (
            <PageWrapper id='home-blog'
            ctnRef={ctnRef}
            >
            
                    


                <Header
                    headerLabel='The Daily Davis'
                    tagLine='Fresh. Relevant. Impactful.'
                    size='md'
                    right
                />

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
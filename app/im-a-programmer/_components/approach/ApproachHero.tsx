'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { PageWrapper, ScrollableItemCtn } from '@/app/_components'
import styles from '../styles.module.css';
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';
import { getAllPostsClient } from '@/utility/blog-section/blog-page-functions';
import { IBlogPopulated } from '@/library/db/models/blog';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import BlogCard2D from '@/app/blog/_components/BlogCard';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { useScroll } from '@/app/_context/sub-context/ScrollContext';
import { useScreenContext } from '@/app/_context/sub-context/ScreenContext';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';

const ApproachHero: React.FC<{
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: (id: string) => void;
}> = ({
    ctnRef,
    scrollTo,
}) => {

        const {
            isMobile,
        } = useScreenContext();
        const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();

        useEffect(() => {

            const initBlogs = async () => {
                const data = await getAllPostsClient();
                setPosts(await data);
            };

            initBlogs();
        }, [])

        const scrollCtnRef = useRef<HTMLDivElement>(null);

        // Function to scroll the container by the window width
        const scrollContainer = (direction: 'left' | 'right') => {
            if (scrollCtnRef?.current) {
                const scrollAmount = window.innerWidth * 0.5;
                if (direction === 'left') {
                    scrollCtnRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth',
                    });
                } else {
                    scrollCtnRef.current.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth',
                    });
                }
            }
        };

        return (
            <PageWrapper
                ctnRef={ctnRef}
                id='approach-main'
            >

                <motion.div
                    className={`${styles.topHeroCtn} top-hero-ctn right`}
                >

                    <MotionDiv>
                        <Typography variant='h1'>
                            My Approach
                        </Typography>
                    </MotionDiv>
                    <motion.h4 className={`${styles.subheader} subheader right`} >
                        Empowering Vision Through Strategic Implementation
                    </motion.h4>

                </motion.div>

                <motion.div
                    className={`flex gap-12 lg:justify-end`}
                >


                    {
                        !isMobile &&
                        <MotionDiv
                            className={styles.scrollableCtnWrapper}
                        >
                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: "100%",
                                    transition: {
                                        duration: 2,
                                    }
                                }}
                                whileHover={{
                                    scale: 1.25
                                }}
                                className={`${styles.leftArrowCtn}`}
                                onClick={() => scrollContainer('left')} // Scroll left on click
                            >
                                <ArrowCircleDownRoundedIcon
                                    className={`${styles.leftArrow}`}
                                />
                            </MotionDiv>

                            <div ref={scrollCtnRef} className={styles.childWrapper} >
                                {
                                    posts && posts.length > 0 ?
                                        <>
                                            {
                                                posts.map((p, i: number) => {
                                                    return (
                                                        <MotionDiv key={`${p._id} ${p.title}`}>
                                                            <BlogCard2D blog={p} />
                                                        </MotionDiv>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        null
                                }
                            </div>


                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: "100%",
                                    transition: {
                                        duration: 2.5,
                                    }
                                }}
                                whileHover={{
                                    scale: 1.25
                                }}
                                className={`${styles.rightArrowCtn}`}
                                onClick={() => scrollContainer('right')} // Scroll right on click
                            >
                                <ArrowCircleDownRoundedIcon
                                    className={`${styles.rightArrow}`}
                                />
                            </MotionDiv>
                        </MotionDiv>
                    }


                    <motion.div
                        className={`${styles.btmHeroCtn} btm-hero-ctn right`}
                    >

                        <motion.div className={`${styles.btnCtn} btn-ctn rightBtn flex gap-3`}>

                        <ButtonPro
                                variant='contained'
                                label='SOLID'
                                color='primary'
                                onClick={() => { scrollTo('approach-solid-principles') }}
                            />
                            
                            <ButtonPro
                                variant='contained'
                                label='Free Consultation'
                                color='secondary'
                                onClick={() => {console.log('Free consultation!'); alert('Free consultation!')}}
                            />
                            
                        </motion.div>
                    </motion.div>
                </motion.div>

            </PageWrapper>
        )
    }

export default ApproachHero
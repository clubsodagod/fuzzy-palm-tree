'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn';
import styles from '../styles.module.css';
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';
import { getAllPostsClient } from '@/utility/blog-section/blog-page-functions';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import { useAppContext } from '@/app/_context/AppContext';
import Header from '@/app/_components/common/Header';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import IconButton from '@/app/_components/common/IconButton';
import BlogCard from '@/app/_components/common/blog/BlogCard';
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper';
import { IBlogPopulated } from '@/app/_database/models/blog';
import { HeroProps } from '@/app/_library/types/common';

interface ApproachHeroProps extends HeroProps {
    posts: IBlogPopulated[]|undefined;
}

const ApproachHero: React.FC<ApproachHeroProps> = ({
    ctnRef,
    scrollTo,
    posts,
}) => {

        const {
            screen: { isMobile, }
        } = useAppContext();


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
            <MotionPageWrapper
                ctnRef={ctnRef}
                id='approach-main'
            >
                <MotionDiv className='hero-wrapper'>
                    <Header
                        headerLabel='My Approach'
                        tagLine='Empowering Vision Through Strategic Implementation'
                        right
                    />
                    <MotionDiv>

                        <ScrollCtnWrapper>
                            <ScrollableItemCtn>
                                {
                                    posts && posts.length > 0 ?
                                        <>
                                            {
                                                posts.map((p, i: number) => {
                                                    return (
                                                        <MotionDiv key={`${p._id} ${p.title}`} className='snap-x-wrapper'>
                                                            <BlogCard post={p} />
                                                        </MotionDiv>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        null
                                }
                            </ScrollableItemCtn>
                        </ScrollCtnWrapper>

                    </MotionDiv>
                </MotionDiv>


                <MotionDiv className='right-btn-ctn right  w-full'>
                    <HeroButtonCtn className={`right-btn-ctn`}>

                        <ButtonPro
                            variant='contained'
                            label="Let's Work"
                            color='primary'
                            href={'/im-a-programmer/lets-work'}
                        />

                        <ButtonPro
                            variant='contained'
                            label='Free Consultation'
                            color='secondary'
                            onClick={() => { console.log('Free consultation!'); alert('Free consultation!') }}
                        />

                        <IconButton
                            label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                            onClick={() => { scrollTo('next') }}
                        />
                    </HeroButtonCtn>
                </MotionDiv>

            </MotionPageWrapper>
        )
    }

export default ApproachHero
'use client'
import React from 'react'
import styles from './styles.module.css'
import { HeroProps } from '@/app/_library/types/common'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import MotionPageWrapper from '@/app/_components/common/SectionWrapper'
import Header from '@/app/_components/common/Header'
import { MotionP } from '@/app/_components/common/framer/MotionP'
import ButtonPro from '../../_components/common/ButtonPro'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import { IBlogPopulated } from '@/app/_database/models/blog'
import BlogCard from '@/app/_components/common/blog/BlogCard'
import IconButton from '@/app/_components/common/IconButton'
import KeyboardDoubleArrowUpRoundedIcon  from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';

interface HomeBlogSectionProps extends HeroProps {
    posts: IBlogPopulated[] | undefined;
}

const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({
    ctnRef,
    posts,
    scrollTo,
    ...props
}) => {
    return (

        <MotionPageWrapper
            ctnRef={ctnRef}
            {...props}
        >
            <MotionDiv
                className='hero-wrapper'
            >

                <Header
                    headerLabel='The Daily Davis'
                    tagLine='Fresh. Relevant. Impactful.'
                    size='md'

                />

            </MotionDiv>

            <MotionDiv className={`${styles.postsCtn}`}>
                <ScrollCtnWrapper>
                    <ScrollableItemCtn>
                        {
                            posts?.map((p) => (
                                <MotionDiv
                                    key={`${p.id}:${p.title} card`}
                                    className='snap-x-wrapper'
                                >
                                    <BlogCard
                                        post={p}
                                    />
                                </MotionDiv>

                            ))
                        }
                    </ScrollableItemCtn>
                </ScrollCtnWrapper>


            </MotionDiv>


            <MotionDiv className={`btm-hero-ctn-wrapper`} id='investments'>

                <MotionP className={` left`} >
                    Exploring the intersections of technology and life, and then everything in between.
                    <span className="check-out-blog-span" id="blog"> Check out my Blog.</span>
                </MotionP>

                <HeroButtonCtn
                    className='btn-ctn left-btn-ctn'
                >

                    <IconButton
                        label={<KeyboardDoubleArrowUpRoundedIcon />}
                        onClick={() => { scrollTo('top') }}
                        
                    />
                    
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon />}
                        onClick={() => { scrollTo('previous') }}
                        down
                    />

                    <ButtonPro
                        variant='contained'
                        // href={'/blog/categories'}
                        label={`Categories`}
                        color='primary'
                    />
                    <ButtonPro
                        variant='contained'
                        id={'subscribe'}
                        label={`Subscribe`}
                        color='secondary'
                    />

                </HeroButtonCtn>
            </MotionDiv>
        </MotionPageWrapper>

    )
}

export default HomeBlogSection
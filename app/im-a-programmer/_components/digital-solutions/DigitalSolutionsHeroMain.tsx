
import React, { RefObject } from 'react'
import { Header, PageWrapper } from '@/app/_hide/_components'
import { motion } from 'framer-motion';
import styles from '../styles.module.css'
import { Button } from '@mui/material';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { extend } from 'lodash';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { HeroProps } from '@/app/_library/types/common';
import ButtonPro from '@/app/_components/common/ButtonPro';




const DigitalSolutionsHeroMain: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id='digital-solutions-main'
        >
            <MotionDiv className={`${styles.heroWrapper}`}>

                <Header
                    headerLabel='Digital Solutions'
                    tagLine='Bringing Your Ideas to Life with Innovation and Expertise'
                    size='md'
                />


            </MotionDiv>
            <MotionDiv
                className={` btm-hero-ctn-wrapper left `}
            >

                <MotionDiv className={`btn-ctn left-btn-ctn`}>

                    <ButtonPro
                        variant='contained'
                        label="Let's Work"
                        color='primary'
                        href='/im-a-programmer/lets-work'
                    />

                    <ButtonPro
                        variant='outlined'
                        label='Custom Software'
                        color='secondary'
                        onClick={() => { scrollTo('custom-software') }}
                    />

                </MotionDiv>
            </MotionDiv>

        </PageWrapper>
    )
}

export default DigitalSolutionsHeroMain
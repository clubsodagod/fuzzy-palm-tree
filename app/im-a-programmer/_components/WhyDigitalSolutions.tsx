'use client'


import React, { RefObject } from 'react';
import { Header, PageWrapper } from '@/app/_hide/_components';
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Button } from '@mui/material';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionP } from '@/app/_components/common/framer/MotionP';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import ButtonPro from '@/app/_components/common/ButtonPro';
import IconButton from '@/app/_components/common/IconButton'
import { HeroProps } from '@/app/_library/types/common';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';



const WhyDigitalSolutions: React.FC<HeroProps> = ({
    ctnRef, scrollTo, id
}) => {

    return (

        <PageWrapper
            id={id}
            ctnRef={ctnRef}
        >

            <Header
                headerLabel='The Power of Digital Solutions'
                tagLine='Harnessing the Power of Technology to Drive Success'
                size='sm'
            />



            {/*  Bottom Container for navigation buttons */}
            <MotionDiv className={`btm-hero-ctn-wrapper left`} id='investments'>

                <MotionP className={` `} id='programmer'>
                    Discover how digital solutions can be just what you need.
                </MotionP>

                <HeroButtonCtn className={`btn-ctn left-btn-ctn`}>
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('previous') }} />}
                        onClick={() => { scrollTo('previous') }}
                        down
                    />
                    <ButtonPro
                        variant='contained'
                        label={`Consultation`}
                        color='primary'
                        onClick={() => {console.log('Free Consultation!');
                        }}
                    />
                    <ButtonPro
                        variant='contained'
                        label={`Let's Work`}
                        color='secondary'
                        href={`/im-a-programmer/lets-work`}
                    />
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                        onClick={() => { scrollTo('next') }}
                    />
                </HeroButtonCtn>
            </MotionDiv>



        </PageWrapper>
    )
}

export default WhyDigitalSolutions
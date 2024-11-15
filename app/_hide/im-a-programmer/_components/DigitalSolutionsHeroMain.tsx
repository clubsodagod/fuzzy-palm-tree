
import React, { RefObject } from 'react'
import { Header, PageWrapper } from '@/app/_hide/_components'
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Button } from '@mui/material';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import { extend } from 'lodash';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';

export type VoidOneParameterFunction = (id: string) => void;
export type VoidTwoParameterFunction = (event: MouseEvent, id: string) => void;

interface DigitalSolutionsHeroProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
}


const DigitalSolutionsHeroMain: React.FC<DigitalSolutionsHeroProps> = ({
    ctnRef,
    scrollTo,
    goToPage
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
                className={`${styles.btmHeroCtn} btm-hero-ctn left mt-auto`}
            >

                <MotionDiv className={`${styles.btnCtn} btn-ctn leftBtn flex gap-3`}>

                    <ButtonPro
                        variant='contained'
                        label="Let's Work"
                        color='primary'
                        href='/im-a-programmer/lets-work'
                        onClick={(event) => { goToPage(event as unknown as MouseEvent, '/im-a-programmer/lets-work') }}
                    />

                    <ButtonPro
                        variant='contained'
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
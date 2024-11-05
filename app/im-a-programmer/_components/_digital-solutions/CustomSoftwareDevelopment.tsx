import { Header, PageWrapper } from '@/app/_components'
import React, { RefObject } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import { Button } from '@mui/material'
import { MotionDivProps } from '@/app/_components/common/ScrollableItemCtn'
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain'
import ButtonPro from '@/app/_components/common/buttons/ButtonPro'
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import KeyboardDoubleArrowUpRoundedIcon  from '@mui/icons-material/KeyboardDoubleArrowUpRounded';



interface CustomSoftwareDevelopmentProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
}

const CustomSoftwareDevelopment: React.FC<CustomSoftwareDevelopmentProps> = ({
    ctnRef,
    scrollTo,
    goToPage
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id='custom-software'
        >

            <MotionDiv className={`${styles.heroWrapper}`}>

                <Header
                    headerLabel='Tailored Software Solutions'
                    tagLine='Your Vision, Our Code: Custom Software Development'
                    size='md'
                    right
                />




            </MotionDiv>
            <MotionDiv className={`${styles.btnCtn} btn-ctn rightBtn flex gap-3`}>



                <ButtonPro
                    variant='outlined'
                    label={<KeyboardDoubleArrowUpRoundedIcon />}
                    color='primary'
                    onClick={() => { scrollTo("top") }}
                />

                <ButtonPro
                    variant='contained'
                    label="Let's Work"
                    color='primary'
                    href='/im-a-programmer/lets-work'
                    onClick={(event) => { goToPage(event as unknown as MouseEvent, '/im-a-programmer/lets-work') }}
                />

                <ButtonPro
                    variant='contained'
                    label='Learn More'
                    color='secondary'
                    onClick={() => { scrollTo('next') }}
                />

            </MotionDiv>

        </PageWrapper>
    )
}

export default CustomSoftwareDevelopment
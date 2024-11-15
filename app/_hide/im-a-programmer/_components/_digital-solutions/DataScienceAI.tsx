import { Header, PageWrapper } from '@/app/_hide/_components'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import styles from '../styles.module.css'
import { Button } from '@mui/material'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn'
import { ExtendedPointUseCase } from '@/library/const'
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';


interface DataScienceAIProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
}


const DataScienceAI: React.FC<DataScienceAIProps> = ({
    ctnRef,
    scrollTo,
    goToPage,
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id='data-science-ai'
        >

            <MotionDiv
                className={`${styles.heroWrapper}`}
            >
                <Header
                    headerLabel='AI Solutions'
                    tagLine='AI and Data Science: Driving Smart Business Decisions'
                    size='md'
                />



            </MotionDiv>
            <MotionDiv
                className='flex flex-col gap-6 text-left'
            >
                <motion.h5 className={styles.excerpt}>
                    Whether you need a tailored CRM, ERP, or any other business application, our custom software solutions deliver functionality that enhances efficiency and scales with your growth.
                </motion.h5>
                <MotionDiv className={`${styles.btnCtn} btn-ctn  flex gap-3`}>

                    <ButtonPro
                        variant='outlined'
                        label={<KeyboardDoubleArrowUpRoundedIcon />}
                        color='primary'
                        onClick={() => { scrollTo("top") }}
                    />
                    <ButtonPro
                        variant='contained'
                        label="Need AI Solutions?"
                        color='primary'
                        onClick={(e) => { goToPage(e as unknown as MouseEvent, '/im-a-programmer/lets-work') }}
                    />

                    <ButtonPro
                        variant='contained'
                        label='Learn More'
                        color='secondary'
                        onClick={() => { scrollTo('next') }}
                    />

                </MotionDiv>
            </MotionDiv>



        </PageWrapper>
    )
}

export default DataScienceAI
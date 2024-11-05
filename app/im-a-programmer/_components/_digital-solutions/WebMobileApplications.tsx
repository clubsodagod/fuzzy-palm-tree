import { Header, PageWrapper } from '@/app/_components';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { RefObject } from 'react';
import styles from '../styles.module.css';
import { MotionDivProps } from '@/app/_components/common/ScrollableItemCtn';
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';



interface WebMobileApplicationsProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
}


const WebMobileApplications: React.FC<WebMobileApplicationsProps> = ({
    ctnRef,
    scrollTo,
    goToPage,
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id='web-mobile-application'
        >

            <MotionDiv className={`${styles.heroWrapper}`}>
                <Header
                    headerLabel='Web and Mobile Applications'
                    tagLine='Your Business, Your App: Customized Mobile Solutions'
                    size='sm'
                    right
                />
            </MotionDiv>




            <MotionDiv
                className={`${styles.heroBtnCtn} flex flex-col gap-6 justify-end items-end pl-[45%] text-right`}
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
                        label="Free Consultation"
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

export default WebMobileApplications
import { Header, PageWrapper } from '@/app/_hide/_components';
import React from 'react';
import styles from '../styles.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { DynamicSectionProps } from '@/app/_library/types/common';
import { MotionH5 } from '@/app/_components/common/framer/MotionH5';
import ButtonPro from '@/app/_components/common/ButtonPro';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';






const WebMobileApplications: React.FC<DynamicSectionProps> = ({
    ctnRef,
    scrollTo,
}) => {
    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id='web-mobile-application'
        >

            <MotionDiv className={`hero-wrapper`}>
                <Header
                    headerLabel='Web and Mobile Applications'
                    tagLine='Your Business, Your App: Customized Mobile Solutions'
                    size='sm'
                    right
                />
            </MotionDiv>




            <MotionDiv className=' btm-hero-ctn-wrapper right'>


                <MotionH5 className={''}>
                    Whether you need a tailored CRM, ERP, or any other business application, our custom software solutions deliver functionality that enhances efficiency and scales with your growth.
                </MotionH5>
                <HeroButtonCtn className={` btn-ctn right-btn-ctn`}>
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
                        href='/im-a-programmer/lets-work'
                    />

                    <ButtonPro
                        variant='contained'
                        label='More'
                        color='secondary'
                        onClick={() => { scrollTo('next') }}
                    />

                </HeroButtonCtn>
            </MotionDiv>


        </MotionPageWrapper>
    )
}

export default WebMobileApplications
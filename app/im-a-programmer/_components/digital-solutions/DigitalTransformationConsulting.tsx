import { Header, PageWrapper } from '@/app/_hide/_components';
import React from 'react';
import styles from '../styles.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { HeroProps } from '@/app/_library/types/common';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import { MotionH5 } from '@/app/_components/common/framer/MotionH5';
import ButtonPro from '@/app/_components/common/ButtonPro';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';





const DigitalTransformationConsulting: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
}) => {
    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id='digital-transformation'
        >


            <MotionDiv className={`${styles.heroWrapper}`}>
                <Header
                    headerLabel='Digital Transformations'
                    tagLine='Adapt, Innovate, and Lead with a Digital Transformation'
                    size='sm'
                />
            </MotionDiv>


            <MotionDiv
                className={`left`}
            >
                <MotionH5 className={styles.excerpt}>
                    Digital transformation is not just about technology. It&apos;s about changing the way you do business. Our digital transformation services help you modernize operations, improve customer engagement, and drive innovation.
                </MotionH5>
                <HeroButtonCtn className={` left-btn-ctn`}>

                    <ButtonPro
                        variant='outlined'
                        label={<KeyboardDoubleArrowUpRoundedIcon />}
                        color='secondary'
                        onClick={() => { scrollTo("top") }}
                    />

                    <ButtonPro
                        variant='contained'
                        label="Consultation"
                        color='primary'
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

export default DigitalTransformationConsulting
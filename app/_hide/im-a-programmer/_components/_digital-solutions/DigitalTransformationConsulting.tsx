import { Header, PageWrapper } from '@/app/_hide/_components';
import React, { RefObject } from 'react';
import styles from '../styles.module.css';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';





interface DigitalTransformationConsultingProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
}

const DigitalTransformationConsulting: React.FC<DigitalTransformationConsultingProps> = ({
    ctnRef,
    scrollTo,
    goToPage,
}) => {
    return (
        <PageWrapper
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
                className={`${styles.heroBtnCtn} flex flex-col gap-6 justify-start items-start md:pr-[45%] text-left`}
            >
                <motion.h5 className={styles.excerpt}>
                    Digital transformation is not just about technology. It&apos;s about changing the way you do business. Our digital transformation services help you modernize operations, improve customer engagement, and drive innovation.
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

export default DigitalTransformationConsulting
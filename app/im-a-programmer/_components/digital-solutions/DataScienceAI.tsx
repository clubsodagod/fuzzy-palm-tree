import { Header } from '@/app/_hide/_components'
import React from 'react'
import styles from '../styles.module.css'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { HeroProps } from '@/app/_library/types/common'
import ButtonPro from '@/app/_components/common/ButtonPro'
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper'
import { MotionH5 } from '@/app/_components/common/framer/MotionH5'



const DataScienceAI: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
}) => {
    return (
        <MotionPageWrapper
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
                className='btm-hero-ctn-wrapper  left'
            >
                <MotionH5 className={styles.excerpt}>
                    Whether you need a tailored CRM, ERP, or any other business application, our custom software solutions deliver functionality that enhances efficiency and scales with your growth.
                </MotionH5>
                <MotionDiv className={`btn-ctn left-btn-ctn`}>

                    <ButtonPro
                        variant='outlined'
                        label={<KeyboardDoubleArrowUpRoundedIcon />}
                        color='primary'
                        onClick={() => { scrollTo("top") }}
                    />
                    <ButtonPro
                        variant='contained'
                        label="AI Solutions?"
                        color='primary'
                    />

                    <ButtonPro
                        variant='contained'
                        label='More'
                        color='secondary'
                        onClick={() => { scrollTo('next') }}
                    />

                </MotionDiv>
            </MotionDiv>



        </MotionPageWrapper>
    )
}

export default DataScienceAI
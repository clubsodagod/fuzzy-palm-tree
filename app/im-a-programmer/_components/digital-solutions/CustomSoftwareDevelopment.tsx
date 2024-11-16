import { Header, PageWrapper } from '@/app/_hide/_components'
import React from 'react'
import styles from '../styles.module.css'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import KeyboardDoubleArrowUpRoundedIcon  from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { HeroProps } from '@/app/_library/types/common'
import ButtonPro from '@/app/_components/common/ButtonPro';



const CustomSoftwareDevelopment: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
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
                    color='secondary'
                    onClick={() => { scrollTo("top") }}
                />

                <ButtonPro
                    variant='contained'
                    label="Let's Work"
                    color='primary'
                    href='/im-a-programmer/lets-work'
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
import React, { RefObject } from 'react'
import styles from '../../_components/styles.module.css'
import LetsWorkForm from './contact-form/LetsWorkForm';
import { useAppContext } from '@/app/_context/AppContext';
import { HeroProps } from '@/app/_library/types/common';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import Header from '@/app/_components/common/Header';


interface LetsWorkHeroProps {
    ctnRef: RefObject<HTMLDivElement>,
    id?: string;
}

const LetsWorkHero: React.FC<LetsWorkHeroProps> = ({
    ctnRef,
    id
}) => {

    const {
        screen: { currentBreakpoint },
    } = useAppContext();

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id={id ? id : 'lets-work-main'}
        >

            <MotionDiv
                className={`hero-wrapper`}
            >

                <Header
                    headerLabel="Let's Work"
                    tagLine='Team Work Is How Dreams Work.'
                    size={("xs").includes(currentBreakpoint) ? 'md' : 'lg'}
                />

                <MotionDiv
                    className={`${styles.btmLetsWorkCtn} `}
                >

                    <MotionDiv
                        className={`${styles.contactFormColumn}`}
                    >
                        <LetsWorkForm />
                    </MotionDiv>

                </MotionDiv>

            </MotionDiv>
        </MotionPageWrapper>
    )
}



export default LetsWorkHero;
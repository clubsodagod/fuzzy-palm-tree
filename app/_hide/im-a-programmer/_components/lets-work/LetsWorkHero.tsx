import React, { RefObject } from 'react'
import styles from '../styles.module.css'
import { Header, PageWrapper } from '@/app/_hide/_components';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';
import LetsWorkScene from './three/LetsWorkScene';
import LetsWorkForm from './contact-form/LetsWorkForm';
import { MotionP } from '@/app/_hide/_components/framer/MotionP';


interface LetsWorkHeroProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>,
}

const LetsWorkHero: React.FC<LetsWorkHeroProps> = ({
    ctnRef,
}) => {

    const {
        currentBreakpoint,
    } = useScreenContext();

    return (
        <PageWrapper
            ctnRef={ctnRef}
        >

            <MotionDiv
                className={`${styles.letsWorkHeroWrapper}`}
            >

                <Header
                    headerLabel="Let's Work"
                    tagLine='Team Work Is How Dreams Work.'
                    size={("xs").includes(currentBreakpoint) ? 'md' : 'lg'}
                />


                <MotionDiv
                className={`${styles.btmLetsWorkCtn} `}
                >
                    {/* <MotionDiv
                        className={`${styles.threeScenePro} `}
                    >
                        <LetsWorkScene />
                    </MotionDiv> */}

                    <MotionDiv
                    className={`${styles.contactFormColumn}`}
                    >
                        <LetsWorkForm />
                    </MotionDiv>

                </MotionDiv>

            </MotionDiv>
        </PageWrapper>
    )
}



export default LetsWorkHero;
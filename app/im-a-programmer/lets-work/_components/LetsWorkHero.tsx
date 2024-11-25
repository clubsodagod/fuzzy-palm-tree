import React, { RefObject } from 'react'
import styles from '../../_components/styles.module.css'
import { Header, PageWrapper } from '@/app/_hide/_components';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import LetsWorkForm from './contact-form/LetsWorkForm';
import { useAppContext } from '@/app/_context/AppContext';
import { HeroProps } from '@/app/_library/types/common';


interface LetsWorkHeroProps {
    ctnRef: RefObject<HTMLDivElement>,
    id?:string;
}

const LetsWorkHero: React.FC<LetsWorkHeroProps> = ({
    ctnRef,
    id
}) => {

    const {
        screen:{currentBreakpoint},
    } = useAppContext();

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id ? id : 'lets-work-main'}
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
'use client'
import { useAppContext } from '@/app/_context/AppContext';
import { ICaseStudy } from '@/app/_database/models/case-study';
import { MotionGroup } from '@/app/_hide/_components/framer/MotionGroup';
import { useScroll } from '@/app/_hide/_context/sub-context/ScrollContext';
import { usePortfolioMotionLogic } from '@/app/_hide/im-a-programmer/portfolio/_utils/portfolio-motion';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater';
import Desk from '@/public/3d-objects/desk/Desk';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import Paper from '@/public/3d-objects/paper/Paper';
import { OrbitControls } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import React from 'react'

const PortfolioExperience: React.FC<{
    link: string;
    caseStudy: ICaseStudy | undefined | null;
}> = ({
    link, caseStudy
}) => {
        // memoized 3D assets
        const MemoizedMacBook = React.memo(MacBook);
        const MemoizedDesk = React.memo(Desk);
        const MemoizedPaper = React.memo(Paper);


        // create visible states
        const [scalingFactor, setScalingFactor] = React.useState<number>(1);

        const [visible, setVisible] = React.useState<VisibilityThreeType>({
            macbook: true,
            desk: false,
            paper: false,
        });

        const { scroll: { dynamicIncrement: dI, scrollY}, appContainer: { scrollRef,  } } = useAppContext();

        // event points for calculating 3d assets
        const homeEventPoints = [
            0, dI(0.5), dI(1),
        ];

        const { macbookMotion, deskMotion, paperMotion } = usePortfolioMotionLogic(scrollY, homeEventPoints)


        // Scaling value for responsive experience
        const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.4 : 0.2), 3) : 1;

        // scale const for managing visibility
        const macbook = macbookMotion().scale.get() * mainScalingFactor;
        const desk = deskMotion().scale.get() * mainScalingFactor;
        const paper = paperMotion().scale.get() * mainScalingFactor;

        // scales object for visibility manager
        const [scales, setScales] = React.useState<ScalesThreeType>({
            macbook, desk, paper,
        });

        // update scaling factor when it changes
        ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });

        // manage visibility of 3d  models
        VisibilityManager({ scales, visible, setVisible });

        // manage scales of object for scroll changes
        ScaleManager({
            scrollY, setScales, scalesPayload: scales
        });

        ThreeWindowUpdater(scrollRef, scrollY)


        return (
            <MotionGroup>

                {/* MacBook Pro */}
                <MotionGroup
                    visible={visible.macbook}
                    initial={{
                        scale: 0.01,
                        x: -30,
                        y: 30,
                    }}
                    animate={{
                        scale: 192,
                        x: 10,
                        y: -15,
                        transition: {
                            duration: 2,
                        }
                    }}
                    position={[macbookMotion().x, macbookMotion().y, macbookMotion().z]}
                    rotation={[macbookMotion().rotationX, macbookMotion().rotationY, macbookMotion().rotationZ]}
                    scale={macbookMotion().scale}
                >
                    <MemoizedMacBook link={link} props={{}} />
                </MotionGroup>

                {/* Desk */}
                <MotionGroup
                    visible={visible.desk}
                    position={[deskMotion().x, deskMotion().y, deskMotion().z]}
                    rotation={[deskMotion().rotationX, deskMotion().rotationY, deskMotion().rotationZ]}
                    scale={deskMotion().scale}
                >
                    <MemoizedDesk />
                </MotionGroup>

                {/* Paper */}
                <MotionGroup
                    visible={visible.paper}
                    position={[paperMotion().x, paperMotion().y, paperMotion().z]}
                    rotation={[paperMotion().rotationX, paperMotion().rotationY, paperMotion().rotationZ]}
                    scale={paperMotion().scale}
                >
                    {/* <OrbitControls /> */}
                    <MemoizedPaper props={{ scale: paperMotion().scale.get() }} caseStudy={caseStudy && caseStudy} />
                </MotionGroup>
            </MotionGroup>

        )
    }

export default PortfolioExperience
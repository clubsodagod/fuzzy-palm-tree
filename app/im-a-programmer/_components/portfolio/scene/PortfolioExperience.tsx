'use client'
import { MotionGroup } from '@/app/_components/framer/MotionGroup';
import { useScroll } from '@/app/_context/sub-context/ScrollContext';
import { usePortfolioMotionLogic } from '@/app/im-a-programmer/portfolio/_utils/portfolio-motion';
import { ICaseStudy } from '@/library/db/models/case-study';
import Desk from '@/public/3d-objects/desk/Desk';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import Paper from '@/public/3d-objects/paper/Paper';
import { OrbitControls } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import React from 'react'

const PortfolioExperience: React.FC<{
    scrollY: MotionValue;
    link: string;
    caseStudy: ICaseStudy;
}> = ({
    scrollY, link, caseStudy
}) => {

        const { dynamicIncrement: dI, windowScrollHeight } = useScroll();

        // event points for calculating 3d assets
        const homeEventPoints = [
            0, dI(0.5), dI(1),
        ];

        const { macbookMotion, deskMotion, paperMotion } = usePortfolioMotionLogic(scrollY, homeEventPoints)


        // memoized 3D assets
        const MemoizedMacBook = React.memo(MacBook);
        const MemoizedDesk = React.memo(Desk);
        const MemoizedPaper = React.memo(Paper);



        return (
            <MotionGroup>

                {/* MacBook Pro */}
                <MotionGroup
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
                    position={[deskMotion().x, deskMotion().y, deskMotion().z]}
                    rotation={[deskMotion().rotationX, deskMotion().rotationY, deskMotion().rotationZ]}
                    scale={deskMotion().scale}
                >
                    <MemoizedDesk />
                </MotionGroup>

                {/* Paper */}
                <MotionGroup
                    position={[paperMotion().x, paperMotion().y, paperMotion().z]}
                    rotation={[paperMotion().rotationX, paperMotion().rotationY, paperMotion().rotationZ]}
                    scale={paperMotion().scale}
                >
                    {/* <OrbitControls /> */}
                    <MemoizedPaper caseStudy={caseStudy} />
                </MotionGroup>
            </MotionGroup>

        )
    }

export default PortfolioExperience
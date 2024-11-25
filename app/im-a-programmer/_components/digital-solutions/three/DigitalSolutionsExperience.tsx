'use client'
import { useAppContext } from '@/app/_context/AppContext';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import { programmerDigitalSolutionsMotion } from '@/app/im-a-programmer/digital-solutions/_utility/motion';
import { useScroll } from 'framer-motion';
import React from 'react'
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import Matrix from '@/public/3d-objects/digital-solutions/matrix/Scene';
import GhostInShell from '@/public/3d-objects/digital-solutions/ghost-in-shell/Scene';

import { Float, OrbitControls } from '@react-three/drei';
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater';
import dynamic from 'next/dynamic';



const IdeaLamp = dynamic(() => import('../../../../../public/3d-objects/light-bulb/LightBulb'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const Chip = dynamic(() => import('../../../../../public/3d-objects/digital-solutions/chip/Scene'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const IPhoneProMax = dynamic(() => import('../../../../../public/3d-objects/iPhone-pro-max/IPhoneProMax'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const IpadPro = dynamic(() => import('../../../../../public/3d-objects/iPad-Pro/IPadPro'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const MacBook = dynamic(() => import('../../../../../public/3d-objects/macbook/Macbook'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});


const DigitalSolutionsExperience = () => {

    // app context values and functions
    const { scroll: { dynamicIncrement: dI, scrollY}, appContainer: { scrollRef, } } = useAppContext();

    // scroll motion values for scroll animations

    // memoized 3D assets
    const CachedIdeaLamp = React.memo(IdeaLamp);
    const CachedChip = React.memo(Chip);
    const CachediPhone = React.memo(IPhoneProMax);
    const CachediPad = React.memo(IpadPro);
    const CachedMacBook = React.memo(MacBook);

    // create visible states
    const [scalingFactor, setScalingFactor] = React.useState<number>(1);

    const [visible, setVisible] = React.useState<VisibilityThreeType>({
        matrix: true,
        ideaLamp: false,
        ghostInShell: false,
        iPhone: false,
        iPad: false,
        webMobile: false,
        chip: false,
    });

    // event points for calculating 3d assets
    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2), dI(2.5), dI(3), dI(3.5),
        dI(4), dI(4.5), dI(5), dI(5.5), dI(6), dI(6.5), dI(7), dI(7.5),
        dI(8), dI(8.5), dI(9), dI(9.5), dI(10), dI(10.5), dI(11), dI(11.5),
        dI(12), dI(12.5), dI(13), dI(13.5), dI(14), dI(14.5), dI(15), dI(15.5),
        dI(16), dI(16.5), dI(17),
    ];

    // motion paths for 3d objects
    const {
        ideaLampMotion, matrixMotion, ghostInShellMotion, chipMotion, motorMotion, webMobileMotion, iPhoneMotion, iPadMotion, macbookMotion
    } = programmerDigitalSolutionsMotion(scrollY, homeEventPoints);

    // Scaling value for responsive experience
    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.4 : 0.6), 3) : 1;

    // scale const for managing visibility
    const matrix = matrixMotion().scale.get() * scalingFactor;
    const ideaLamp = ideaLampMotion().scale.get() * scalingFactor;
    const chip = chipMotion().scale.get() * scalingFactor;
    const iPad = iPadMotion().scale.get() * scalingFactor;
    const iPhone = iPhoneMotion().scale.get() * scalingFactor;
    const webMobile = webMobileMotion().scale.get() * scalingFactor;
    const macbook = macbookMotion().scale.get() * scalingFactor;
    const ghostInShell = ghostInShellMotion().scale.get() * scalingFactor;

    // scales object for visibility manager
    const [scales, setScales] = React.useState<ScalesThreeType>({
        matrix, ideaLamp, chip, iPad, iPhone,
        webMobile, ghostInShell, macbook
    });

    // update scaling factor when it changes
    ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });

    // manage visibility of 3d  models
    VisibilityManager({ scales, visible, setVisible });

    // manage scales of object for scroll changes
    ScaleManager({
        scrollY, setScales, scalesPayload: {
            matrix, ideaLamp, chip, iPad, iPhone, webMobile, macbook, ghostInShell
        }
    });

    ThreeWindowUpdater(scrollRef, scrollY)


    return (
        <MotionGroup
            // scale={scalingFactor}
        >
            <MotionGroup
                visible={visible.matrix}
                position={[matrixMotion().x, matrixMotion().y, matrixMotion().z]}
                rotation={[matrixMotion().rotationX, matrixMotion().rotationY, matrixMotion().rotationZ]}
                scale={matrixMotion().scale}
            >
                <Matrix />
            </MotionGroup>

            <MotionGroup
                visible={visible.ideaLamp}
                position={[ideaLampMotion().x, ideaLampMotion().y, ideaLampMotion().z]}
                rotation={[ideaLampMotion().rotationX, ideaLampMotion().rotationY, ideaLampMotion().rotationZ]}
                scale={ideaLampMotion().scale}
            >
                <Float
                    floatIntensity={2}
                    rotationIntensity={5}
                >
                    <IdeaLamp visible={visible.ideaLamp}  />
                </Float>
            </MotionGroup>



            <MotionGroup
                visible={visible.ghostInShell}
                position={[ghostInShellMotion().x, ghostInShellMotion().y, ghostInShellMotion().z]}
                rotation={[ghostInShellMotion().rotationX, ghostInShellMotion().rotationY, ghostInShellMotion().rotationZ]}
                scale={ghostInShellMotion().scale}
            >
                <GhostInShell />
            </MotionGroup>

            {/* web and mobile apps experience */}
            <MotionGroup
                visible={visible.webMobile}
                position={[webMobileMotion().x, webMobileMotion().y, webMobileMotion().z]}
                rotation={[webMobileMotion().rotationX, webMobileMotion().rotationY, webMobileMotion().rotationZ]}
                scale={webMobileMotion().scale}
            >
                <Float
                    floatIntensity={2}
                    rotationIntensity={1}
                >
                    <MotionGroup
                        position={[iPhoneMotion().x, iPhoneMotion().y, iPhoneMotion().z]}
                        rotation={[iPhoneMotion().rotationX, iPhoneMotion().rotationY, iPhoneMotion().rotationZ]}
                        scale={iPhoneMotion().scale}
                    >
                        <Float
                            floatIntensity={5}
                        >
                            <CachediPhone />
                        </Float>
                    </MotionGroup>

                    <MotionGroup
                        position={[iPadMotion().x, iPadMotion().y, iPadMotion().z]}
                        rotation={[iPadMotion().rotationX, iPadMotion().rotationY, iPadMotion().rotationZ]}
                        scale={iPadMotion().scale}
                    >
                        <Float
                            floatIntensity={5}
                        >
                            <CachediPad />
                        </Float>
                    </MotionGroup>

                    <MotionGroup
                        position={[macbookMotion().x, macbookMotion().y, macbookMotion().z]}
                        rotation={[macbookMotion().rotationX, macbookMotion().rotationY, macbookMotion().rotationZ]}
                        scale={macbookMotion().scale}
                    >
                        <MacBook />
                    </MotionGroup>
                </Float>


            </MotionGroup>

            <MotionGroup
                visible={visible.chip}
                position={[chipMotion().x, chipMotion().y, chipMotion().z]}
                rotation={[chipMotion().rotationX, chipMotion().rotationY, chipMotion().rotationZ]}
                scale={chipMotion().scale}
            >
                <Float
                    floatIntensity={5}
                    rotationIntensity={5}
                >
                    <CachedChip />
                </Float>
            </MotionGroup>



        </MotionGroup>

    )
}

export default DigitalSolutionsExperience
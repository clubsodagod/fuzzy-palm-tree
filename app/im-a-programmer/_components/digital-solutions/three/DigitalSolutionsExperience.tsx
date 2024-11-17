import { useAppContext } from '@/app/_context/AppContext';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import { programmerDigitalSolutionsMotion } from '@/app/im-a-programmer/digital-solutions/_utility/motion';
import IdeaLamp from '@/public/3d-objects/digital-solutions/idea-lamp/Scene';
import { useScroll } from 'framer-motion';
import React from 'react'
import IdeaLampExperience from './building-blocks/IdeaLampExperience';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import Matrix from '@/public/3d-objects/digital-solutions/matrix/Scene';
import GhostInShell from '@/public/3d-objects/digital-solutions/ghost-in-shell/Scene';
import WindyDay from '@/public/3d-objects/windy-day/WindyDay';
import Network from '@/public/3d-objects/digital-solutions/chip/Scene';
import Motor from '@/public/3d-objects/digital-solutions/motor/Scene';
import IPhoneProMax from '@/public/3d-objects/iPhone-pro-max/IPhoneProMax';
import IpadPro from '@/public/3d-objects/iPad-Pro/IPadPro';
import { Float, OrbitControls } from '@react-three/drei';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import Chip from '@/public/3d-objects/digital-solutions/chip/Scene';
import ChipPro from '@/public/3d-objects/digital-solutions/chip-pro/Scene';

const DigitalSolutionsExperience = () => {

    // app context values and functions
    const { scroll: { dynamicIncrement: dI, }, appContainer: { scrollRef } } = useAppContext();

    // scroll motion values for scroll animations
    const { scrollY, } = useScroll({ container: scrollRef, });

    // memoized 3D assets
    const CachedIdeaLamp = React.memo(IdeaLamp);
    const CachedMatrix = React.memo(Matrix);
    const CachedGhostInShell = React.memo(GhostInShell);
    const CachedNetwork = React.memo(Network);
    const CachedMotor = React.memo(Motor);
    const CachediPhone = React.memo(IPhoneProMax);
    const CachediPad = React.memo(IpadPro);

    // create visible states
    const [scalingFactor, setScalingFactor] = React.useState<number>(1);

    const [visible, setVisible] = React.useState<VisibilityThreeType>({
        matrix: true,
        ideaLamp: true,
        ghostInShell: true,
        iPhone: true,
        iPad: true,
        webMobile: true,
        chip: true,
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
    const matrix = ideaLampMotion().scale.get() * mainScalingFactor;
    const ideaLamp = ideaLampMotion().scale.get() * mainScalingFactor;
    const chip = ideaLampMotion().scale.get() * mainScalingFactor;
    const iPad = ideaLampMotion().scale.get() * mainScalingFactor;
    const iPhone = ideaLampMotion().scale.get() * mainScalingFactor;
    const webMobile = ideaLampMotion().scale.get() * mainScalingFactor;
    const ghostInShell = ideaLampMotion().scale.get() * mainScalingFactor;

    // scales object for visibility manager
    const [scales, setScales] = React.useState<ScalesThreeType>({
        matrix, ideaLamp, chip, iPad, iPhone,
        webMobile, ghostInShell
    });

    // update scaling factor when it changes
    ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });

    // manage visibility of 3d  models
    VisibilityManager({ scales, visible, setVisible });

    // manage scales of object for scroll changes
    ScaleManager({
        scrollY, setScales, scalesPayload: {
            ideaLamp
        }
    });

    return (
        <MotionGroup
            scale={scalingFactor}
        >
<OrbitControls />
            <MotionGroup
                position={[matrixMotion().x, matrixMotion().y, matrixMotion().z]}
                rotation={[matrixMotion().rotationX, matrixMotion().rotationY, matrixMotion().rotationZ]}
                scale={matrixMotion().scale}
            >
                <Matrix />
            </MotionGroup>

            <MotionGroup
                position={[ideaLampMotion().x, ideaLampMotion().y, ideaLampMotion().z]}
                rotation={[ideaLampMotion().rotationX, ideaLampMotion().rotationY, ideaLampMotion().rotationZ]}
                scale={ideaLampMotion().scale}
            >
                <Float
                    floatIntensity={2}
                    rotationIntensity={5}
                >
                    <CachedIdeaLamp />
                </Float>
            </MotionGroup>

            

            <MotionGroup
                position={[ghostInShellMotion().x, ghostInShellMotion().y, ghostInShellMotion().z]}
                rotation={[ghostInShellMotion().rotationX, ghostInShellMotion().rotationY, ghostInShellMotion().rotationZ]}
                scale={ghostInShellMotion().scale}
            >
                <GhostInShell />
            </MotionGroup>

            {/* web and mobile apps experience */}
            <MotionGroup
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
                position={[chipMotion().x, chipMotion().y, chipMotion().z]}
                rotation={[chipMotion().rotationX, chipMotion().rotationY, chipMotion().rotationZ]}
                scale={chipMotion().scale}
            >
                <Float
                    floatIntensity={5}
                    rotationIntensity={5}
                >
                    <Chip  />
                </Float>
            </MotionGroup>



        </MotionGroup>

    )
}

export default DigitalSolutionsExperience
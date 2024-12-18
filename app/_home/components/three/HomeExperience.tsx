'use client'
import { useAppContext } from '@/app/_context/AppContext';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useHomePageMotion } from '../../utility/motion';
import { Float } from '@react-three/drei';
import MacBook from '@/public/3d-objects/macbook/Macbook';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import NewspaperBox from '@/public/3d-objects/newspaper-box/Scene';
import { useFrame } from '@react-three/fiber';
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';

const HomeExperience = () => {

    // 3D objects
    const CachedMacBook = React.memo(MacBook);

    const { scroll: { dynamicIncrement: dI, scrollY }, appContainer: { scrollRef, } } = useAppContext();
    // create event points for handling scroll animations
    const homeEventPoints = [
        0, (dI(0.5)),
        (dI(1)), (dI(1.5)),
        (dI(2)),
    ];

    const { programmerMotion, newspaperMotion } = useHomePageMotion(scrollY, homeEventPoints,);

    const [scalingFactor, setScalingFactor] = useState<number>(1);

    const [visible, setVisible] = useState<VisibilityThreeType>({
        macbook: true,
        newspaper: false,
    });

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, 0.6), 3) : 1;

    const macbook = programmerMotion().scale.get() * mainScalingFactor;
    const newspaper = programmerMotion().scale.get() * mainScalingFactor;

    const [scales, setScales] = useState<ScalesThreeType>({
        macbook, newspaper
    });


    // update scaling factor when it changes
    ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });
    
    // Visibility manager
    VisibilityManager({ scales, visible, setVisible })


    // manage scales of object for scroll changes
    ScaleManager({
        scrollY, setScales, scalesPayload: scales
    });

    ThreeWindowUpdater(scrollRef, scrollY)


    return (

        <MotionGroup
            scale={scalingFactor}
        >


            <MotionGroup
                name='macbook'
                visible={visible.macbook}
                castShadow
                initial={{ scale: 0 }}

                rotation={[programmerMotion().rotationX, programmerMotion().rotationY, programmerMotion().rotationZ]}
                position={[programmerMotion().x, programmerMotion().y, programmerMotion().z]}
                scale={programmerMotion().scale}
            >
                <Float
                    floatIntensity={0.0625}
                    rotationIntensity={1.25}
                >
                    <CachedMacBook />
                </Float>
            </MotionGroup>

            <MotionGroup
                name='newspaper_box'
                visible={visible.newspaper}
                castShadow
                initial={{ scale: 0 }}

                rotation={[newspaperMotion().rotationX, newspaperMotion().rotationY, newspaperMotion().rotationZ]}
                position={[newspaperMotion().x, newspaperMotion().y, newspaperMotion().z]}
                scale={newspaperMotion().scale}
            >
                <Float
                    floatIntensity={0.0625}
                    rotationIntensity={0.25}
                >
                    <NewspaperBox />
                </Float>
            </MotionGroup>
        </MotionGroup>
    )
}

export default HomeExperience
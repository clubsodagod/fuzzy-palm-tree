'use client'
import { coreValues } from '@/library/const'
import { Atom, Bee, Book, City, Compass, Diamonds, Hive, MarbleColumn, Moon, PowerTower, PumpingHeart, RubiksCube, Scale, TropicalIsland } from '@/public/3d-objects'
import { Float, useMotion } from '@react-three/drei'
import { motionValue, MotionValue, useMotionValue, useScroll, Variants } from 'framer-motion'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useResponsiveValues as rv } from '@/utility/functions';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup'
import { useAboutMotionLogic } from '@/app/about/_utils/about-motion'
import ScaleManager from '@/app/_utility/three/ScaleManager'
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager'
import VisibilityManager from '@/app/_utility/three/VisibilityManager'
import { ScalesThreeType, VisibilityThreeType, WorkerThreeType } from '@/app/_library/types/common'
import CoreValueAnimationHandler from '@/app/about/_utils/CoreValueAnimationHandler'
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater'
import StandardLights from '@/app/_components/common/three/lights/StandardLights'
import ShadowCatcher from '@/app/_components/common/three/lights/ShadowCatcher'
import Dynamic3DLoader from '@/app/_components/common/three/DynamicModelLoader'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const PowerTowerDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/power-tower/PowerTower'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });
// const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
//     ssr: false, // Optional: Disable server-side rendering for this component
// });

export type VisibleType = {
    coreValue: boolean,
    moon: boolean,
    powerTower: boolean,
    atom: boolean,
    diamonds: boolean,
    book: boolean,
    bee: boolean,
    beeBuddy: boolean,
    hive: boolean,
    rubiksCube: boolean,
    compass: boolean,
    city: boolean,
    pumpingHeart: boolean,
    marbleColumn: boolean,
    scale: boolean,
    tropicalIsland: boolean,
};

type VariantType = {
    coreValue: string,
    moon: string,
    powerTower: string,
    powerTowerCoreValue: string,
    atom: string,
    diamonds: string,
    book: string,
    bee: string,
    beeBuddy: string,
    hive: string,
    rubiksCube: string,
    compass: string,
    city: string,
    pumpingHeart: string,
    marbleColumn: string,
    scale: string,
    tropicalIsland: string,
}

const MissionStatementExperience: React.FC<{ value: number, scrollY: MotionValue }> = ({
    value,
    scrollY,
}) => {

    const {
        scrollYProgress
    } = useScroll()
    // core value animation object
    const variants: Variants = {
        enter: {
            scale: [0, 1.5, 1],
            x: [75, 0],
            y: [75, 0],
            transition: {
                duration: 0.65,
            }
        },
        exit: {
            scale: [1, 1.5, 0],
            x: [0, -75],
            y: [0, 75],
            transition: {
                duration: 0.55,
            }
        },
        none: {
            scale: 0
        }
    };

    const [previousValue, setPreviousValue] = useState<number>(coreValues.length - 1);

    const dI = (iteration: number) => window?.innerHeight * iteration;



    const mainRef = useRef(null)
    const moonRef = useRef(null)
    const powerTowerRef = useRef(null)
    const diamondsRef = useRef(null)

    // core value assets
    // const MemoizedMarbleColumn = React.memo(MarbleColumn);
    // const MemoizedScale = React.memo(Scale);
    // const MemoizedDiamonds = React.memo(Diamonds);
    // const MemoizedBook = React.memo(Book);
    // const MemoizedBee = React.memo(Bee);
    // const MemoizedBeeBuddy = React.memo(Bee);
    // const MemoizedHive = React.memo(Hive);
    // const MemoizedRubiksCube = React.memo(RubiksCube);
    // const MemoizedCompass = React.memo(Compass);
    // const MemoizedCity = React.memo(City);
    // const MemoizedPumpingHeart = React.memo(PumpingHeart);
    // const MemoizedAtom = React.memo(Atom);
    // const MemoizedPowerTowerCoreValue = React.memo(PowerTower);
    // const MemoizedTropicalIsland = React.memo(TropicalIsland);

    const [visible, setVisible] = useState<VisibilityThreeType>({
        moon: true,
        powerTower: true,
        powerTowerCoreValue: true,
        atom: false,
        scale: false,
        beeBuddy: false,
        diamonds: false,
        book: false,
        bee: false,
        hive: false,
        rubiksCube: false,
        compass: false,
        city: false,
        pumpingHeart: false,
        marbleColumn: true,
        tropicalIsland: false,
        coreValue: false,
    });

    const [variantStatus, setVariantStatus] = useState<VariantType>({
        coreValue: "enter",
        moon: "enter",
        powerTower: "none",
        powerTowerCoreValue: "none",
        atom: "none",
        scale: "none",
        beeBuddy: "none",
        diamonds: "none",
        book: "none",
        bee: "none",
        hive: "none",
        rubiksCube: "none",
        compass: "none",
        city: "none",
        pumpingHeart: "none",
        marbleColumn: "enter",
        tropicalIsland: "none",
    });

    const mainScalingFactor = Math.min(Math.max(window?.innerWidth / 1920, window?.innerWidth > 700 && window?.innerWidth < window?.innerHeight ? 0.8 : 0.6), 3);

    // initialize state variables
    const [scalingFactor, setScalingFactor] = React.useState<number>(1);

    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2),
    ];

    const { moonMotion, powerTowerMotion, mainMotion, columnMotion, coreValueMotion, mainCoreValueMotion } = useAboutMotionLogic(scrollY, homeEventPoints)

    useFrame(() => {
        const ref = mainRef as RefObject<THREE.Group>
        const refDiamonds = diamondsRef as RefObject<THREE.Group>
        if (ref.current?.rotation && scrollYProgress.get() > 0.25 && scrollYProgress.get() < 0.75) {
            ref.current.rotation.y += 0.0025
        }
        if (refDiamonds.current?.rotation && scrollYProgress.get() > 0.75) {
            refDiamonds.current.rotation.y += 0.0015
        }

    });

    
    const moon = moonMotion().scale.get() * scalingFactor;
    console.log(moon);
    const powerTower = powerTowerMotion().scale.get() * scalingFactor;
    const powerTowerCoreValue = powerTowerMotion().scale.get() * scalingFactor;
    const atom = 10 * scalingFactor;
    const scale = 0.5 * scalingFactor;
    const diamonds = 18 * scalingFactor;
    const book = 2 * scalingFactor;
    const hive = 0.02 * scalingFactor;
    const bee = 0.25 * scalingFactor;
    const beeBuddy = 0.25 * scalingFactor;
    const rubiksCube = 0.5 * scalingFactor;
    const pumpingHeart = 0.5 * scalingFactor;
    const city = 0.0375 * scalingFactor;
    const tropicalIsland = 45 * scalingFactor;
    const compass = 35 * scalingFactor;

    const [scales, setScales] = useState<ScalesThreeType>({
        moon, powerTower, atom, scale, diamonds, book, hive, bee, beeBuddy, rubiksCube,
        pumpingHeart, city, tropicalIsland, compass, powerTowerCoreValue
    });

    // update scaling factor when it changes
    ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });

    // manage visibility of 3d  models
    VisibilityManager({ scales, visible, setVisible });

    // manage scales of object for scroll changes
    ScaleManager({
        scrollY, setScales, scalesPayload: scales
    });

    // Core Value Animation Handler 
    CoreValueAnimationHandler({
        visible, setVisible,
        previousValue, setPreviousValue,
        setVariantStatus, value
    })

useEffect(()=> {
    if (visible) {
        console.log(visible);
        
    }
},[visible])


    return (
        <group
        >

            <StandardLights />
            <ShadowCatcher />
            <MotionGroup
                ref={mainRef}
                position={[mainMotion().x, mainMotion().y, mainMotion().z]}
                visible={true}
                scale={scalingFactor}
            >
                <MotionGroup
                    position={[moonMotion().x, moonMotion().y, moonMotion().z]}
                    ref={moonRef}
                    scale={moonMotion().scale}
                    visible={visible.moon}
                    initial={{
                        scale: 0.01,
                    }}
                >
                    <MoonDynamic />
                </MotionGroup>

                <MotionGroup
                    initial={{
                        scale: 0.001
                    }}
                    position={[powerTowerMotion().x, powerTowerMotion().y, powerTowerMotion().z]}
                    rotation={[powerTowerMotion().rotationX, powerTowerMotion().rotationY, powerTowerMotion().rotationZ]}
                    ref={powerTowerRef}
                    scale={powerTowerMotion().scale}
                    visible={visible.powerTower}
                >
                    <PowerTowerDynamic
                    />
                </MotionGroup>

            </MotionGroup>




        </group >
    )
}

export default MissionStatementExperience
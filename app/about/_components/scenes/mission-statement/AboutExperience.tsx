'use client'
import { coreValues, missionStatement } from '@/library/const'
import { Atom, Bee, Book, City, Compass, Diamonds, Hive, MarbleColumn, Moon, PowerTower, PumpingHeart, RubiksCube, Scale, TropicalIsland } from '@/public/3d-objects'
import { Float, PerformanceMonitor, useMotion } from '@react-three/drei'
import { motionValue, MotionValue, useMotionValue, useScroll, Variants } from 'framer-motion'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useResponsiveValues as rv } from '@/utility/functions';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup'
import { useAboutMotionLogic } from '@/app/about/_utils/about-motion'
import ScaleManager from '@/app/_utility/three/ScaleManager'
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager'
import VisibilityManager from '@/app/_utility/three/VisibilityManager'
import { ScalesThreeType, VariantThreeType, VisibilityThreeType, WorkerThreeType } from '@/app/_library/types/common'
import CoreValueAnimationHandler from '@/app/about/_utils/CoreValueAnimationHandler'
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater'
import StandardLights from '@/app/_components/common/three/lights/StandardLights'
import ShadowCatcher from '@/app/_components/common/three/lights/ShadowCatcher'
import Dynamic3DLoader from '@/app/_components/common/three/DynamicModelLoader'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import zIndex from '@mui/material/styles/zIndex'


const MoonDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/moon/Moon'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const PowerTowerDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/power-tower/PowerTower'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});


type VariantType = {
    missionStatement: string,
    moon: string,
    powerTower: string,
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



    const [visible, setVisible] = useState<VisibilityThreeType>({
        moon: true,
        powerTower: true,
        missionStatement:false
    });

    const [variantStatus, setVariantStatus] = useState<VariantType>({
        powerTower: "enter",
        moon: "enter",
        missionStatement:"enter",
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
        if (ref.current?.rotation && scrollYProgress.get() > 0.25 && scrollYProgress.get() < 0.75) {
            ref.current.rotation.y += 0.0025
        }

    });

    
    const moon = moonMotion().scale.get() * scalingFactor;
    const powerTower = powerTowerMotion().scale.get() * scalingFactor;
    const missionStatementScale = moonMotion().scale.get() * scalingFactor;

    const [scales, setScales] = useState<ScalesThreeType>({
        moon, powerTower, missionStatementScale
    });

    // update scaling factor when it changes
    ScalingFactorManager({ scalingFactor, setScalingFactor, mainScalingFactor });

    // manage visibility of 3d  models
    VisibilityManager({ scales, visible, setVisible });

    // manage scales of object for scroll changes
    ScaleManager({
        scrollY, setScales, scalesPayload: {
            moon, powerTower, missionStatementScale
        }
    });




const scrollprogress = scrollYProgress.get()
const [progress, setProgress] = useState<number>(0);

React.useEffect(() => {
    console.log(scrollprogress);

    if (scrollprogress !== progress) {
        if (scrollprogress && scrollprogress > 0.55) {
            setVisible((prev) => ({
                ...prev,
                coreValues: true
            }))
            setProgress(progress)
        } if (scrollprogress > 0.1 && scrollprogress <= 0.75) {
            setVisible((prev) => ({
                ...prev,
                missionStatement: true,
                coreValues: false,
            }))
            setProgress(progress)
        }
    }


}, [scrollprogress, progress]);
    return (
         
        <group
        visible={visible.missionStatement}
        >

{/* <Perf 
deepAnalyze
position='top-left'
style={{zIndex:200, marginTop:'15vh',
    position:'absolute'
}}
/> */}

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
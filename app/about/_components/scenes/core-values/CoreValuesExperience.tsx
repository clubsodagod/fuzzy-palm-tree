'use client'
import { MotionGroup } from '@/app/_hide/_components/framer/MotionGroup'
import { useAboutMotionLogic } from '@/app/_hide/about/_utils/about-motion';
import { MarbleColumn, Diamonds, Bee, RubiksCube, Compass, City, PumpingHeart, Atom, TropicalIsland } from '@/public/3d-objects';
import { Scale, Book, Hive } from '@mui/icons-material';
import { Float } from '@react-three/drei'
import { MotionValue, Variants } from 'framer-motion';
import React, { useState } from 'react'
import { VisibleType } from '../mission-statement/AboutExperience';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import dynamic from 'next/dynamic';
import { Perf } from 'r3f-perf';
import { VariantType } from '@/library/types/three-model';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import CoreValueAnimationHandler from '@/app/about/_utils/CoreValueAnimationHandler';
import { coreValues } from '@/library/const';
import { useAppContext } from '@/app/_context/AppContext';
import { useResponsiveValues as rv } from '@/app/_utility/scroll/scroll-animation-helpers';

const PowerTowerDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/power-tower/PowerTower'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const MarbleColumnDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/marble-column/MarbleColumn'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const ScaleDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/scale/Scale'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const DiamondsDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/diamonds/Diamonds'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const BookDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/book/Book'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const BeeDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/bee/Bee'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const BeeBuddyDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/bee/Bee'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const HiveDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/hive/Hive'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const RubiksCubeDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/rubiks-cube/RubiksCube'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const CompassDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/compass/Compass'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const CityDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/city/City'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const PumpingHeartDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/pumping-heart/PumpingHeart'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const AtomDynamic = dynamic(() => import('../../../../../public/3d-objects/atom/Atom'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});
const TropicalIslandDynamic = dynamic(() => import('../../../../../public/3d-objects/core-values/tropical-island/TropicalIsland'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});

const CoreValuesExperience: React.FC<{ value: number, scrollY: MotionValue, }> = ({
    value,
    scrollY,
}) => {

    const {
        scroll: { dynamicIncrement: dI }
    } = useAppContext();
    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2),
    ];
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

    const { moonMotion, powerTowerMotion, mainMotion, columnMotion, coreValueMotion, mainCoreValueMotion } = useAboutMotionLogic(scrollY, homeEventPoints)


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
    const [previousValue, setPreviousValue] = useState<number>(coreValues.length - 1);




    const [visible, setVisible] = useState<VisibilityThreeType>({
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
        powerTower, atom, scale, diamonds, book, hive, bee, beeBuddy, rubiksCube,
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

    return (

        <MotionGroup
            position={[columnMotion().x, columnMotion().y, columnMotion().z]}
        >



            {/* column */}
            <MotionGroup
                visible={visible.marbleColumn}
                scale={mainCoreValueMotion().scale}
            >
                <MarbleColumnDynamic scale={33} />
            </MotionGroup>

            <MotionGroup
                scale={coreValueMotion().scale}
                position={[coreValueMotion().x, coreValueMotion().y, coreValueMotion().z]}
            >

                {/* atom */}
                <MotionGroup
                    visible={visible.atom}
                    position={[rv([0, 0, 25]), 65, 0]}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.atom}
                    >
                        <AtomDynamic scale={10} />
                    </MotionGroup>

                </MotionGroup>
                {/* scale */}
                <MotionGroup
                    position={[0, 40, 0]}
                    visible={visible.scale}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.scale}
                    >
                        <Float
                            floatIntensity={0.5}
                        >

                            <ScaleDynamic
                                rotation-y={3.75}
                                scale={50}
                            />
                        </Float>
                    </MotionGroup>

                </MotionGroup>

                {/* rubiks cube */}
                <MotionGroup
                    position={[rv([0, -5, -5]), 45, 0]}
                    visible={visible.rubiksCube}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.rubiksCube}
                    >
                        <Float
                            floatIntensity={0.5}
                        >

                            <RubiksCubeDynamic
                                rotation-y={3.75}
                                scale={rv([2.25, 3, 3])}
                            />
                        </Float>
                    </MotionGroup>

                </MotionGroup>

                {/* pumping heart */}
                <MotionGroup
                    position={[rv([0, -3, -3]), 39, 5]}
                    visible={visible.pumpingHeart}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.pumpingHeart}
                    >
                        <Float
                            floatIntensity={0.5}
                        >

                            <PumpingHeartDynamic
                                rotation-y={3.75}
                                scale={0.25}
                            />
                        </Float>
                    </MotionGroup>

                </MotionGroup>


                {/* diamonds */}
                <MotionGroup
                    position={[rv([0, -5, -5]), -5, 5]}
                    visible={visible.diamonds}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.diamonds}
                    >
                        <Float
                            floatIntensity={3}
                        >
                            <DiamondsDynamic
                                rotation-y={3.75}
                                scale={18}
                            />

                        </Float>

                    </MotionGroup>

                </MotionGroup>



                {/* bee and hive */}
                <MotionGroup>
                    <Float
                        floatIntensity={0.5}
                    >

                        {/* bee */}
                        <MotionGroup
                            position={[-7, 48, 0]}
                            visible={false}
                            rotation-y={-1}
                        >
                            <BeeDynamic
                                animation='_bee_idle'
                                props={{
                                    scale: 0.25
                                }}

                            />
                        </MotionGroup>
                        {/* hive */}
                        <MotionGroup
                            position={[0, 53, 0]}
                            visible={false}
                            rotation-y={3.75}
                        >
                            <HiveDynamic
                                scale={0.02}
                            />
                        </MotionGroup>
                        {/* bee buddy */}
                        <MotionGroup
                            position={[-14, 52, 5]}
                            visible={false}
                        >
                            <BeeBuddyDynamic
                                animation='_bee_hover'
                                props={{
                                    scale: 0.25
                                }}
                            />
                        </MotionGroup>

                    </Float>
                </MotionGroup>
            </MotionGroup>





            {/* city */}
            <MotionGroup
                position={[rv([0, -1, -10]), 45, 15]}
                rotation-x={0.45}
                rotation-y={0.45}
                visible={visible.city}
            >

                <Float
                    floatIntensity={2}
                    rotationIntensity={2}
                >
                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.city}
                    >
                        <CityDynamic
                            animation='Main'
                            props={{
                                scale: rv([0.03, 0.0375, 0.0375]),
                            }}
                        />
                    </MotionGroup>
                </Float>


            </MotionGroup>


            {/* sustainability */}
            <MotionGroup
                visible={visible.tropicalIsland}
            >
                {/* tropical island */}
                <MotionGroup
                    rotation-y={0}
                    position={[0, 0, 65]}
                    visible={visible.tropicalIsland}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.tropicalIsland}
                        rotation-y={5.75}
                    >
                        <TropicalIslandDynamic
                            animation='ArmatureAction'
                            props={{
                                scale: 15
                            }}
                        />
                    </MotionGroup>

                </MotionGroup>

                {/* power tower*/}
                <MotionGroup
                    rotation-y={0}
                    position={[0, 40, 0]}
                    visible={visible.powerTowerCoreValue}
                >

                    <MotionGroup
                        variants={variants}
                        animate={variantStatus.powerTowerCoreValue}
                    >
                        <PowerTowerDynamic
                            scale={0.35}
                            rotation-y={2.75}
                            rotation-x={0.25}
                        />
                    </MotionGroup>

                </MotionGroup>
            </MotionGroup>

            {/* compass */}
            <MotionGroup
                rotation-x={1}
                position={[rv([0, 0, -15]), rv([45, 45, 50]), 25]}
                visible={visible.compass}
            >

                <MotionGroup
                    variants={variants}
                    animate={variantStatus.compass}
                >
                    <Float
                        floatIntensity={1}
                    >
                        <CompassDynamic
                            animation={['rotating cylinderAction', 'needleAction']}
                            props={{
                                scale: rv([0.25, 0.25, 0.35])
                            }}
                        />
                    </Float>
                </MotionGroup>

            </MotionGroup>

            {/* book */}
            <MotionGroup
                rotation-y={0}
                position={[-5, 49, 0]}
                visible={visible.book}
            >

                <MotionGroup
                    variants={variants}
                    animate={variantStatus.book}
                >
                    <Float
                        floatIntensity={0.5}
                    >
                        <BookDynamic
                            animation='Take 001'
                            props={{
                                scale: 2
                            }}
                        />
                    </Float>
                </MotionGroup>


            </MotionGroup>

        </MotionGroup>

    )
}

export default CoreValuesExperience
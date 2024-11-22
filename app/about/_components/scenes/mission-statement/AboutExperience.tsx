'use client'

import { coreValues } from '@/library/const'
import { Atom, Bee, Book, City, Compass, Diamonds, Hive, MarbleColumn, Moon, PowerTower, PumpingHeart, RubiksCube, Scale, TropicalIsland } from '@/public/3d-objects'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Variants } from 'framer-motion'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useResponsiveValues as rv } from '@/utility/functions';
import { useAppContext } from '@/app/_context/AppContext'
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup'
import { useAboutMotionLogic } from '@/app/about/_utils/about-motion'
import ScaleManager from '@/app/_utility/three/ScaleManager'
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager'
import VisibilityManager from '@/app/_utility/three/VisibilityManager'
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common'
import CoreValueAnimationHandler from '@/app/about/_utils/CoreValueAnimationHandler'
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater'

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

const MissionStatementExperience: React.FC<{ value: number }> = ({ value }) => {

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

    const {
        scroll: { scrollYProgress, dynamicIncrement: dI, scrollY, },
        appContainer: { scrollRef }
    } = useAppContext();


    const MemoizedMoon = React.memo(Moon);
    const MemoizedPowerTower = React.memo(PowerTower);

    const mainRef = useRef(null)
    const moonRef = useRef(null)
    const powerTowerRef = useRef(null)
    const diamondsRef = useRef(null)

    // core value assets
    const MemoizedMarbleColumn = React.memo(MarbleColumn);
    const MemoizedScale = React.memo(Scale);
    const MemoizedDiamonds = React.memo(Diamonds);
    const MemoizedBook = React.memo(Book);
    const MemoizedBee = React.memo(Bee);
    const MemoizedBeeBuddy = React.memo(Bee);
    const MemoizedHive = React.memo(Hive);
    const MemoizedRubiksCube = React.memo(RubiksCube);
    const MemoizedCompass = React.memo(Compass);
    const MemoizedCity = React.memo(City);
    const MemoizedPumpingHeart = React.memo(PumpingHeart);
    const MemoizedAtom = React.memo(Atom);
    const MemoizedPowerTowerCoreValue = React.memo(PowerTower);
    const MemoizedTropicalIsland = React.memo(TropicalIsland);





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



    // useFrame(() => {
    //     const ref = mainRef as RefObject<THREE.Group>
    //     const refDiamonds = diamondsRef as RefObject<THREE.Group>
    //     if (ref.current?.rotation && scrollYProgress.get() > 0.25 && scrollYProgress.get() < 0.75) {
    //         ref.current.rotation.y += 0.0025
    //     }
    //     if (refDiamonds.current?.rotation && scrollYProgress.get() > 0.75) {
    //         refDiamonds.current.rotation.y += 0.0015
    //     }

    // });


    const moon = moonMotion().scale.get() * scalingFactor;
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

    ThreeWindowUpdater(scrollRef, scrollY)


    return (
        <group
        >


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
                    <MemoizedMoon />
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
                    <MemoizedPowerTower
                    />
                </MotionGroup>

            </MotionGroup>

            <MotionGroup
                position={[columnMotion().x, columnMotion().y, columnMotion().z]}
                scale={columnMotion().scale}
            >

                {/* column */}
                <MotionGroup
                    visible={visible.marbleColumn}
                    scale={mainCoreValueMotion().scale}
                >
                    <MemoizedMarbleColumn />
                </MotionGroup>

                <MotionGroup
                >

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
                                <MemoizedAtom scale={10} />
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

                                    <MemoizedScale
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

                                    <MemoizedRubiksCube
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

                                    <MemoizedPumpingHeart
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
                            ref={diamondsRef}
                        >

                            <MotionGroup
                                variants={variants}
                                animate={variantStatus.diamonds}
                            >
                                <Float
                                    floatIntensity={3}
                                >
                                    <MemoizedDiamonds
                                        rotation-y={3.75}
                                        scale={18}
                                    />

                                </Float>

                            </MotionGroup>

                        </MotionGroup>



                        {/* bee and hive */}
                        <MotionGroup
                            position-x={rv([7, 0, 0])}
                        >

                            <Float
                                floatIntensity={0.5}
                            >

                                {/* bee */}
                                <MotionGroup
                                    position={[-7, 48, 0]}
                                    visible={visible.bee}
                                    rotation-y={-1}
                                >
                                    <MotionGroup
                                        variants={variants}
                                        animate={variantStatus.bee}
                                    >
                                        <MemoizedBee
                                            animation='_bee_idle'
                                            props={{
                                                scale: 0.25
                                            }}

                                        />
                                    </MotionGroup>

                                </MotionGroup>
                                {/* hive */}
                                <MotionGroup
                                    position={[0, 53, 0]}
                                    visible={visible.hive}
                                    rotation-y={3.75}
                                >

                                    <MotionGroup
                                        variants={variants}
                                        animate={variantStatus.hive}
                                    >
                                        <MemoizedHive
                                            scale={0.02}
                                        />
                                    </MotionGroup>

                                </MotionGroup>

                            </Float>
                            {/* bee buddy */}
                            <MotionGroup
                                position={[-14, 52, 5]}
                                visible={visible.beeBuddy}
                            >

                                <MotionGroup
                                    variants={variants}
                                    animate={variantStatus.beeBuddy}
                                >
                                    <MemoizedBeeBuddy
                                        animation='_bee_hover'
                                        props={{
                                            scale: 0.25
                                        }}
                                    />
                                </MotionGroup>

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
                                    <MemoizedCity
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
                                    <MemoizedTropicalIsland
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
                                    <MemoizedPowerTowerCoreValue
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
                                    <MemoizedCompass
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
                                    <MemoizedBook
                                        animation='Take 001'
                                        props={{
                                            scale: 2
                                        }}
                                    />
                                </Float>
                            </MotionGroup>


                        </MotionGroup>


                    </MotionGroup>

                </MotionGroup>


            </MotionGroup>


        </group >
    )
}

export default MissionStatementExperience
'use client'

import { MotionGroup } from '@/app/_components/framer/MotionGroup'
import { useScroll } from '@/app/_context/sub-context/ScrollContext'
import { useAboutMotionLogic } from '@/app/about/_utils/about-motion'
import { useAboutSectionRefs } from '@/app/about/_utils/refs'
import { coreValues } from '@/library/const'
import { Atom, Bee, Book, City, Compass, Diamonds, Hive, MarbleColumn, Moon, PowerTower, PumpingHeart, RubiksCube, Scale, SolarPanel, TropicalIsland } from '@/public/3d-objects'
import { BBAnchor, Box, Float } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { MotionValue, Variants } from 'framer-motion'
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useResponsiveValues as rv } from '@/utility/functions';

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

const MissionStatementExperience: React.FC<{ scrollY: MotionValue, value: number }> = ({ scrollY, value }) => {

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
        scrollYProgress, windowScrollHeight, dynamicIncrement: dI
    } = useScroll();

    const { refs } = useAboutSectionRefs();

    const MemoizedMoon = React.memo(Moon);
    const MemoizedPowerTower = React.memo(PowerTower);

    const mainRef = useRef(null)
    const moonRef = useRef(null)
    const powerTowerRef = useRef(null)
    const atomRef = useRef(null)
    const marbleColumnRef = useRef(null)
    const scaleRef = useRef(null)
    const diamondsRef = useRef(null)
    const bookRef = useRef(null)
    const beeRef = useRef(null)
    const beeBuddyRef = useRef(null)
    const hiveRef = useRef(null)
    const rubiksCubeRef = useRef(null)
    const compassRef = useRef(null)
    const cityRef = useRef(null)
    const pumpingHeartRef = useRef(null)
    const tropicalIslandRef = useRef(null)

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
    const MemoizedTropicalIsland = React.memo(TropicalIsland);





    const [visible, setVisible] = useState<VisibleType>({
        moon: true,
        powerTower: true,
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
        coreValue: true,
    });

    const [variantStatus, setVariantStatus] = useState<VariantType>({
        coreValue: "enter",
        moon: "enter",
        powerTower: "none",
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

    const scalingFactor = () => Math.min(Math.max(window?.innerWidth / 1920, window?.innerWidth > 700 && window?.innerWidth < window?.innerHeight ? 0.8 : 0.6), 3);
    console.log(scalingFactor());

    // initialize state variables
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [mainScalingFactor, setMainScalingFactor] = useState<number>(1);
    const [mainPosition, setMainPosition] = useState<{ x: number, y: number, z: number }>({ x: 0, y: 0, z: 0 });

    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2),
    ];

    const { moonMotion, powerTowerMotion, mainMotion, columnMotion, coreValueMotion } = useAboutMotionLogic(scrollY, homeEventPoints)



    useFrame(() => {
            setMainScalingFactor(scalingFactor());
        let ref = mainRef as RefObject<THREE.Group>
        if (ref.current?.rotation && scrollYProgress.get() < 0.75) {
            ref.current.rotation.y += 0.0025
        }
    });


    const moon = moonMotion().scale.get() * mainScalingFactor;
    const powerTower = powerTowerMotion().scale.get() * mainScalingFactor;
    const atom = 10 * mainScalingFactor;
    const scale = 0.5 * mainScalingFactor;
    const diamonds = 18 * mainScalingFactor;
    const book = 2 * mainScalingFactor;
    const hive = 0.02 * mainScalingFactor;
    const bee = 0.25 * mainScalingFactor;
    const beeBuddy = 0.25 * mainScalingFactor;
    const rubiksCube = 0.5 * mainScalingFactor;
    const pumpingHeart = 0.5 * mainScalingFactor;
    const city = 0.0375 * mainScalingFactor;
    const tropicalIsland = 45 * mainScalingFactor;
    const compass = 35 * mainScalingFactor;

    const [scales, setScales] = useState({
        moon, powerTower, atom, scale, diamonds, book, hive, bee, beeBuddy, rubiksCube,
        pumpingHeart, city, tropicalIsland, compass
    });


    const prevScalesRef = useRef<typeof scales | null>(null);
    const yProgress = scrollYProgress.get();

    // Assuming scales is a prop or state
    useEffect(() => {
        // Store the previous scales values using a ref to compare

        // Create a deep comparison function or use lodash's _.isEqual for deep comparison if needed
        const hasScalesChanged = (prev: typeof scales | null, next: typeof scales) => {
            if (!prev) return true; // Initial render case
            return Object.keys(next).some((key) => prev[key as keyof typeof prev] !== next[key as keyof typeof next]);
        };

        // If scales object has changed, update the visibility
        if (hasScalesChanged(prevScalesRef.current, scales)) {
            Object.keys(scales).forEach((key) => {
                const value = scales[key as keyof typeof scales];

                if (value > 0 || value < 0) {
                    setVisible((prev) => ({
                        ...prev,
                        [key]: true,
                    }));
                } else {
                    setVisible((prev) => ({
                        ...prev,
                        [key]: false,
                    }));
                }

            });

            // Update the ref to the latest scales
            prevScalesRef.current = scales;
            console.log(visible);

        }

        const handleIndex = (index: number) => {
            switch (index) {
                case 0:

                    return "atom";
                case 1:

                    return "scale";
                case 2:

                    return "diamonds";
                case 3:

                    return "book";
                case 4:

                    return "team";
                case 5:

                    return "compass";
                case 6:

                    return "rubiksCube";
                case 7:

                    return "city";
                case 8:

                    return "pumpingHeart";
                case 9:

                    return "powerTower";

                default:
                    return "atom";
            }

        }
        // create animation motion
        const animationHandler = (v: number, pv: number) => {


            const handleAnimation = () => {

                // alert(`newValue:${value} , prevValue:${previousValue}`);

                switch (v) {
                    case 4:

                        setVisible((prev: VisibleType) => ({
                            ...prev,
                            bee: true,
                            beeBuddy: true,
                            hive: true
                        }))
                        setVariantStatus((prev: VariantType) => ({
                            ...prev,
                            [handleIndex(pv)]: "exit",
                            bee: "enter",
                            beeBuddy: "enter",
                            hive: "enter"
                        }));
                        setTimeout(() => {
                            setVisible((prev) => ({
                                ...prev,
                                [handleIndex(pv)]: false,
                            }))
                        }, 1000);
                        break;

                    default:

                        switch (pv) {
                            case 4:
                                setVariantStatus((prev: VariantType) => ({
                                    ...prev,
                                    [handleIndex(v)]: "enter",
                                    bee: "exit",
                                    beeBuddy: "exit",
                                    hive: "exit"
                                }));
                                setTimeout(() => {
                                    setVisible((prev) => ({
                                        ...prev,
                                        bee: false,
                                        beeBuddy: false,
                                        hive: false
                                    }));
                                }, 1000);
                                break;

                            default:
                                setVariantStatus((prev: VariantType) => ({
                                    ...prev,
                                    [handleIndex(pv)]: "exit",
                                    [handleIndex(v)]: "enter",
                                }));
                                setTimeout(() => {
                                    setVisible((prev) => ({
                                        ...prev,
                                        [handleIndex(pv)]: false,
                                    }));
                                }, 1000);

                                break;
                        }

                        break;

                }
            };


            setVisible((prev) => ({
                ...prev,
                [handleIndex(v)]: true,
            }))

            handleAnimation();
            setPreviousValue(value);
        };

        // core value index change
        if (value != previousValue) {
            animationHandler(value, previousValue);
        }

    }, [scales, visible, value, previousValue, yProgress]);

    useEffect(() => {
        {
            mainScalingFactor && mainScalingFactor
        }
    }, [mainScalingFactor]);



    return (
        <group
        >


            <MotionGroup
                ref={mainRef}
                position={[mainMotion().x, mainMotion().y, mainMotion().z]}
                visible={true}
                scale={mainScalingFactor}
            >
                <MotionGroup
                    position={[moonMotion().x, moonMotion().y, moonMotion().z]}
                    ref={moonRef}
                    scale={moonMotion().scale}
                    visible={visible.moon}
                    initial={{
                        scale:0.01,
                    }}
                >
                    <MemoizedMoon />
                </MotionGroup>

                <MotionGroup
                    initial={{
                        scale: powerTowerMotion().scale.get()
                    }}
                    animate={{
                        scale: powerTowerMotion().scale.get()
                    }}
                    position={[powerTowerMotion().x, powerTowerMotion().y, powerTowerMotion().z]}
                    rotation={[powerTowerMotion().rotationX, powerTowerMotion().rotationY, powerTowerMotion().rotationZ]}
                    ref={powerTowerRef}
                    scale={powerTowerMotion().scale}
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
                >
                    <MemoizedMarbleColumn scale={33} />
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
                            position={[-5, 45, 0]}
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
                                        scale={3}
                                    />
                                </Float>
                            </MotionGroup>

                        </MotionGroup>

                        {/* pumping heart */}
                        <MotionGroup
                            position={[-3, 39, 5]}
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
                            position={[-5, -5, 5]}
                            visible={visible.diamonds}
                        >

                            <MotionGroup
                                variants={variants}
                                animate={variantStatus.diamonds}
                            >
                                <MemoizedDiamonds
                                    rotation-y={3.75}
                                    scale={18}
                                />
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
                        </MotionGroup>

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



                        {/* city */}
                        <MotionGroup
                            position={[-10, 52, 15]}
                            rotation-x={0.45}
                            rotation-y={0.45}
                            visible={visible.city}
                        >

                            <MotionGroup
                                variants={variants}
                                animate={variantStatus.city}
                            >
                                <MemoizedCity
                                    animation='Main'
                                    props={{
                                        scale: 0.0375
                                    }}
                                />
                            </MotionGroup>

                        </MotionGroup>

                        {/* tropical island */}
                        <MotionGroup
                            rotation-y={0}
                            position={[0, 0, 25]}
                            visible={visible.tropicalIsland}
                        >

                            <MotionGroup
                                variants={variants}
                                animate={variantStatus.tropicalIsland}
                            >
                                <MemoizedTropicalIsland
                                    animation='ArmatureAction'
                                    props={{
                                        scale: 45
                                    }}
                                />
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
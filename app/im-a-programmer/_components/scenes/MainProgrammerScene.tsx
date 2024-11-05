"use client"
import { MotionGroup } from '@/app/_components/framer/MotionGroup';
import { useScroll } from '@/app/_context/sub-context/ScrollContext';
import { Atom, BankVault, CoinGrowthModel, DollarSign, IPhoneModel, LightBulbModel, MacbookModel, POSMachineModel, PuzzleModel, RobotModel, SmilingEmojiOneModel, SmilingEmojiTwoModel, SphereBotModel, SwissArmyKnifeModel } from '@/public/3d-objects';
import { useMotionLogic } from '@/utility/animation/programmer-page';
import { Environment, Float } from '@react-three/drei';
import { Canvas, GroupProps } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import React, { RefObject, Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import DigitalDataHighway from '@/public/3d-objects/digital-data-highway/DigitalDataHighway';
import CombinationLock from '@/public/3d-objects/combination-lock/CombinationLock';




const Experience = ({ scrollY }: { scrollY: MotionValue }) => {


    // memoized 3D assets
    const MemoizedLightBulb = React.memo(LightBulbModel);
    const MemoizedSphereBot = React.memo(SphereBotModel);
    const MemoizedPOSMachine = React.memo(POSMachineModel);
    const MemoizedIPhone = React.memo(IPhoneModel);
    const MemoizedPuzzle = React.memo(PuzzleModel);
    const MemoizedEmoji = React.memo(SmilingEmojiTwoModel);
    const MemoizedSwissArmyKnife = React.memo(SwissArmyKnifeModel);
    const MemoizedMacbook = React.memo(MacbookModel);
    const MemoizedCoinGrowth = React.memo(CoinGrowthModel);
    const MemoizedDataHighway = React.memo(DigitalDataHighway);
    const MemoizedEmojiTwo = React.memo(SmilingEmojiOneModel);
    const MemoizedDollarSign = React.memo(DollarSign);
    const MemoizedCombinationLock = React.memo(CombinationLock);
    const MemoizedAtom = React.memo(Atom);

    // initialize state variables
    const [scalingFactor, setScalingFactor] = useState<number>(1);
    const [visible, setVisible] = useState({
        lightBulb: true,
        bot: false,
        pos: false,
        iPhone: false,
        puzzle: false,
        emoji: false,
        swiss: false,
        macbook: false,
        coin: false,
        dataHighway: false,
        emojiTwo: false,
        dollar: false,
        lock: false,
        atom: false,
    });


    const { dynamicIncrement: dI, windowScrollHeight } = useScroll();

    // event points for calculating 3d assets
    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2 ), dI(2.5), dI(3 ), dI(3.5),
        dI(4 ), dI(4.5), dI(5 ), dI(5.5), dI(6 ), dI(6.5), dI(7 ), dI(7.5),
        dI(8 ), dI(8.5), dI(9 ), dI(9.5), dI(10 ), dI(10.5), dI(11 ), dI(11.5),
        dI(12 ), dI(12.5), dI(13 ), dI(13.5), dI(14 ), dI(14.5), dI(15 ), dI(15.5),
        dI(16 ), dI(16.5), dI(17 ), dI(17.5), dI(18 ), dI(18.5), dI(19 ), dI(19.5),dI(20), dI(20.5), dI(21), dI(21.5)
    ];

    // motion paths for 3d objects
    const {
        lightBulbMotion, robotMotion, posMachineMotion,
        iPhoneMotion, puzzleMotion, emojiMotion,
        swissMotion, macbookMotion, coinGrowthMotion,
        dataHighwayMotion, emojiTwoMotion, dollarSignMotion,
        combinationLockMotion, atomMotion,
    } = useMotionLogic(scrollY, homeEventPoints);

    // 
    const scrollFactor = scrollY.getPrevious();

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.4 :0.6), 3) : 1;
    const mainHeightScalingFactor = window ? Math.min(Math.max(window.innerHeight / 911, 0.6), 3) : 1;

    const lightBulb = lightBulbMotion().scale.get() * mainScalingFactor;
    const bot = robotMotion().scale.get() * mainScalingFactor;
    const pos = posMachineMotion().scale.get() * mainScalingFactor;
    const iPhone = iPhoneMotion().scale.get() * mainScalingFactor;
    const puzzle = puzzleMotion().scale.get() * mainScalingFactor;
    const emoji = emojiMotion().scale.get() * mainScalingFactor;
    const swiss = swissMotion().scale.get() * mainScalingFactor;
    const macbook = macbookMotion().scale.get() * mainScalingFactor;
    const coin = coinGrowthMotion().scale.get() * mainScalingFactor;
    const dataHighway = dataHighwayMotion().scale.get() * mainScalingFactor;
    const emojiTwo = emojiTwoMotion().scale.get() * mainScalingFactor;
    const dollar = dollarSignMotion().scale.get() * mainScalingFactor;
    const lock = combinationLockMotion().scale.get() * mainScalingFactor;
    const atom = atomMotion().scale.get() * mainScalingFactor;


    const [scales, setScales] = useState({
        lightBulb, bot, pos,
        iPhone, puzzle, emoji,
        swiss, macbook, coin,
        dataHighway, emojiTwo, dollar,
        lock, atom
    });

    useEffect(() => {
        if (scalingFactor) {
            setScalingFactor(mainScalingFactor);
        }

    }, [mainScalingFactor, scalingFactor]);

        const prevScalesRef = useRef<typeof scales | null>(null);


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
    }, [scales]);

    useEffect(()=> {
        if (scrollFactor != scrollY.get()) {
            setScales({
                lightBulb,
                bot, pos, iPhone, puzzle, emoji, swiss, macbook, coin, dataHighway, emojiTwo, dollar, atom, lock
            });            
        }
    },[scrollFactor])

    return (
        <group
        scale={mainScalingFactor}
        >


            {/* light bulb model */}
            <MotionGroup
                visible={visible.lightBulb}
                castShadow
                scale={lightBulbMotion().scale}
                position={[lightBulbMotion().x, lightBulbMotion().y, lightBulbMotion().z]}
                rotation={[lightBulbMotion().rotationX, lightBulbMotion().rotationY, lightBulbMotion().rotationZ]}
            >
                <Float
                    floatIntensity={1.5}
                    rotationIntensity={3}
                >
                    <MemoizedLightBulb />
                </Float>
            </MotionGroup>

            {/* sphere bot model */}
            <MotionGroup
                visible={visible.bot}
                castShadow
                scale={robotMotion().scale}
                position={[robotMotion().x, robotMotion().y, robotMotion().z]}
                rotation={[robotMotion().rotationX, robotMotion().rotationY, robotMotion().rotationZ]}
            >
                <MemoizedSphereBot />

            </MotionGroup>

            {/* pos machine model */}
            <MotionGroup
                visible={visible.pos}
                castShadow
                scale={posMachineMotion().scale}
                position={[posMachineMotion().x, posMachineMotion().y, posMachineMotion().z]}
                rotation={[posMachineMotion().rotationX, posMachineMotion().rotationY, posMachineMotion().rotationZ]}
            >
                <MemoizedPOSMachine />
            </MotionGroup>

            {/* iPhone model */}
            <MotionGroup
                visible={visible.iPhone}
                castShadow
                scale={iPhoneMotion().scale}
                position={[iPhoneMotion().x, iPhoneMotion().y, iPhoneMotion().z]}
                rotation={[iPhoneMotion().rotationX, iPhoneMotion().rotationY, iPhoneMotion().rotationZ]}
            >
                <Float
                    floatIntensity={1.5}
                    rotationIntensity={1.5}
                >
                    <MemoizedIPhone />
                </Float>
            </MotionGroup>

            {/* puzzle model */}
            <MotionGroup
                visible={visible.puzzle}
                castShadow
                scale={puzzleMotion().scale}
                position={[puzzleMotion().x, puzzleMotion().y, puzzleMotion().z]}
                rotation={[puzzleMotion().rotationX, puzzleMotion().rotationY, puzzleMotion().rotationZ]}
            >
                <MemoizedPuzzle />
            </MotionGroup>

            {/* emoji model */}
            <MotionGroup
                visible={visible.emoji}
                castShadow
                scale={emojiMotion().scale}
                position={[emojiMotion().x, emojiMotion().y, emojiMotion().z]}
                rotation={[emojiMotion().rotationX, emojiMotion().rotationY, emojiMotion().rotationZ]}
            >
                <Float
                // floatIntensity={1.5}
                // rotationIntensity={1.5}
                >
                    <MemoizedEmoji />
                </Float>
            </MotionGroup>

            {/* swiss army knife model */}
            <MotionGroup
                visible={visible.swiss}
                castShadow
                scale={swissMotion().scale}
                position={[swissMotion().x, swissMotion().y, swissMotion().z]}
                rotation={[swissMotion().rotationX, swissMotion().rotationY, swissMotion().rotationZ]}
            >
                {/* <Float
                            // floatIntensity={1.5}
                            // rotationIntensity={1.5}
                            > */}
                <MemoizedSwissArmyKnife />
                {/* </Float> */}
            </MotionGroup>

            {/* macbook model */}
            <MotionGroup
                visible={visible.macbook}
                castShadow
                scale={macbookMotion().scale}
                position={[macbookMotion().x, macbookMotion().y, macbookMotion().z]}
                rotation={[macbookMotion().rotationX, macbookMotion().rotationY, macbookMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <MemoizedMacbook />
                </Float>
            </MotionGroup>

            {/* coin growth model */}
            <MotionGroup
                visible={visible.coin}
                castShadow
                scale={coinGrowthMotion().scale}
                position={[coinGrowthMotion().x, coinGrowthMotion().y, coinGrowthMotion().z]}
                rotation={[coinGrowthMotion().rotationX, coinGrowthMotion().rotationY, coinGrowthMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <MemoizedCoinGrowth />
                </Float>
            </MotionGroup>

            {/* data highway model */}
            <MotionGroup
                visible={visible.dataHighway}
                castShadow
                scale={dataHighwayMotion().scale}
                position={[dataHighwayMotion().x, dataHighwayMotion().y, dataHighwayMotion().z]}
                rotation={[dataHighwayMotion().rotationX, dataHighwayMotion().rotationY, dataHighwayMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <MemoizedDataHighway />
                </Float>
            </MotionGroup>

            {/* emoji two model */}
            <MotionGroup
                visible={visible.emojiTwo}
                castShadow
                scale={emojiTwoMotion().scale}
                position={[emojiTwoMotion().x, emojiTwoMotion().y, emojiTwoMotion().z]}
                rotation={[emojiTwoMotion().rotationX, emojiTwoMotion().rotationY, emojiTwoMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <MemoizedEmojiTwo />
                </Float>
            </MotionGroup>

            {/* dollar sign model */}
            <MotionGroup
                visible={visible.dollar}
                castShadow
                scale={dollarSignMotion().scale}
                position={[dollarSignMotion().x, dollarSignMotion().y, dollarSignMotion().z]}
                rotation={[dollarSignMotion().rotationX, dollarSignMotion().rotationY, dollarSignMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <MemoizedDollarSign />
                </Float>
            </MotionGroup>

            {/* pad lock model */}
            <MotionGroup
                visible={visible.lock}
                castShadow
                scale={combinationLockMotion().scale}
                position={[combinationLockMotion().x, combinationLockMotion().y, combinationLockMotion().z]}
                rotation={[combinationLockMotion().rotationX, combinationLockMotion().rotationY, combinationLockMotion().rotationZ]}
            >
                <MemoizedCombinationLock />
            </MotionGroup>

            {/* atom model */}
            <MotionGroup
                visible={visible.atom}
                castShadow
                scale={atomMotion().scale}
                position={[atomMotion().x, atomMotion().y, atomMotion().z]}
                rotation={[atomMotion().rotationX, atomMotion().rotationY, atomMotion().rotationZ]}
            >
                <MemoizedAtom />
            </MotionGroup>
        </group>
    )
}



const MainProgrammerScene: React.FC<{
    scrollY: MotionValue,
}> = ({
    scrollY,
}) => {




        return (
            <Canvas
                dpr={[1, 1.5]}
                style={{
                    pointerEvents: 'none',
                    position: 'fixed',
                    top: 0,
                    zIndex: 1,
                }}
                shadows
                camera={{
                    position: [0, 0, 60],
                    fov: 50,
                }}
            >
                <Suspense fallback={null}>

                    <Experience
                        scrollY={scrollY}
                    />

                    <ambientLight />
                    <Environment preset='warehouse' />
                    <directionalLight
                        castShadow
                        position={[0, 0, 3]} // Adjust position as needed
                        intensity={1}
                        shadow-mapSize-width={256}
                        shadow-mapSize-height={256}
                        shadow-camera-far={1000}
                        shadow-camera-near={-100}
                        shadow-camera-right={100}
                        shadow-camera-left={-100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
                    />

                    <mesh rotation={[-Math.PI / 6, 0, 0]} position={[0, -5, -10]} receiveShadow >
                        <circleGeometry args={[150]} />
                        <shadowMaterial
                            opacity={0.3}
                        />
                    </mesh>
                </Suspense>
            </Canvas>
        )
    }



export default MainProgrammerScene;
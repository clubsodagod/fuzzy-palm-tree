"use client"
import { MotionGroup } from '@/app/components/framer/MotionGroup';
import { useScroll } from '@/app/context/sub-context/ScrollContext';
import { BankVault, CoinGrowthModel, DollarSign, IPhoneModel, LightBulbModel, MacbookModel, POSMachineModel, PuzzleModel, RobotModel, SmilingEmojiOneModel, SmilingEmojiTwoModel, SphereBotModel, SwissArmyKnifeModel } from '@/public/3d-objects';
import { useMotionLogic } from '@/utility/animation/programmer-page';
import { Environment, Float } from '@react-three/drei';
import { Canvas, GroupProps } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import React, { RefObject, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import DigitalDataHighway from '@/public/3d-objects/digital-data-highway/DigitalDataHighway';
import CombinationLock from '@/public/3d-objects/combination-lock/CombinationLock';


const MainProgrammerScene: React.FC<{
    scrollY: MotionValue,
}> = ({
    scrollY,
}) => {


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


        const lightRef = React.useRef<GroupProps>(null);
        const botRef = React.useRef<GroupProps>(null);
        const posMachineRef = React.useRef<GroupProps>(null);
        const iPhoneRef = React.useRef<GroupProps>(null);
        const puzzleRef = React.useRef<GroupProps>(null);
        const emojiRef = React.useRef<GroupProps>(null);
        const swissArmyKnifeRef = React.useRef<GroupProps>(null);
        const macbookRef = React.useRef<GroupProps>(null);
        const coinGrowthRef = React.useRef<GroupProps>(null);
        const dataHighwayRef = React.useRef<GroupProps>(null);
        const emojiTwoRef = React.useRef<GroupProps>(null);
        const dollarSignRef = React.useRef<GroupProps>(null);
        const CombinationLockRef = React.useRef<GroupProps>(null);

        const { fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn, windowScrollHeight, dynamicIncrement: dI, windowHeight, scrollYPro } = useScroll();

        const [visibleLight, setVisibleLight] = useState<boolean>(true);
        const [visibleRobot, setVisibleRobot] = useState<boolean>(false);
        const [visiblePOSMachine, setVisiblePOSMachine] = useState<boolean>(false);
        const [visibleIPhone, setVisibleIPhone] = useState<boolean>(false);
        const [visiblePuzzle, setVisiblePuzzle] = useState<boolean>(false);
        const [visibleEmoji, setVisibleEmoji] = useState<boolean>(false);
        const [visibleSwiss, setVisibleSwiss] = useState<boolean>(false);
        const [visibleMacbook, setVisibleMacbook] = useState<boolean>(false);
        const [visibleCoinGrowth, setVisibleCoinGrowth] = useState<boolean>(false);
        const [visibleDataHighway, setVisibleDataHighway] = useState<boolean>(false);
        const [visibleEmojiTwo, setVisibleEmojiTwo] = useState<boolean>(false);
        const [visibleDollarSign, setVisibleDollarSign] = useState<boolean>(false);
        const [visibleCombinationLock, setVisibleCombinationLock] = useState<boolean>(true);

        const homeEventPoints = [0, dI(1), dI(2), dI(3), dI(4), dI(5), dI(6), dI(7), dI(8), dI(9), dI(10), dI(11), dI(12), dI(13), dI(14), dI(15), dI(16), dI(17), dI(18), windowScrollHeight];

        const {
            lightBulbMotion,
            robotMotion,
            posMachineMotion,
            iPhoneMotion,
            puzzleMotion,
            emojiMotion,
            swissMotion,
            macbookMotion,
            coinGrowthMotion,
            dataHighwayMotion,
            emojiTwoMotion,
            dollarSignMotion,
            combinationLockMotion,
        } = useMotionLogic(scrollY, homeEventPoints);

        const scrollFactor = scrollY.get();

        useEffect(() => {
            if (!visibleLight) {
                if (scrollFactor <= windowHeight * 2) {
                    setVisibleLight(!visibleLight)
                }
            }
            if (visibleLight) {
                if (scrollFactor > windowHeight * 2) {
                    setVisibleLight(!visibleLight)
                }
            }

            if (!visibleRobot) {
                if (scrollFactor >= windowHeight * 2 && scrollFactor <= dI(3)) {
                    setVisibleRobot(!visibleRobot)
                }
            }
            if (visibleRobot) {
                if (scrollFactor > windowHeight * 3) {
                    setVisibleRobot(!visibleRobot)
                }
            }

            if (!visiblePOSMachine) {
                if (scrollFactor >= windowHeight * 2 && scrollFactor <= windowHeight * 4) {
                    setVisiblePOSMachine(!visiblePOSMachine)
                }
            }
            if (visiblePOSMachine) {
                if (scrollFactor > windowHeight * 4) {
                    setVisiblePOSMachine(!visiblePOSMachine)
                }
            }

            if (!visibleIPhone) {
                if (scrollFactor >= windowHeight * 2 && scrollFactor <= windowHeight * 5.5) {
                    setVisibleIPhone(!visibleIPhone)
                }
            }
            if (visibleIPhone) {
                if (scrollFactor > windowHeight * 5.5 || scrollFactor < windowHeight * 2) {
                    setVisibleIPhone(!visibleIPhone)
                }
            }

            if (!visiblePuzzle) {
                if (scrollFactor >= windowHeight * 5 && scrollFactor <= windowHeight * 6.5) {
                    setVisiblePuzzle(!visiblePuzzle)
                }
            }
            if (visiblePuzzle) {
                if (scrollFactor > windowHeight * 6.5 || scrollFactor < windowHeight * 5) {
                    setVisiblePuzzle(!visiblePuzzle)
                }
            }

            if (!visibleEmoji) {
                // console.log("test");

                if (scrollFactor >= dI(5.5) && scrollFactor <= dI(8.75) || scrollFactor >= dI(9) && scrollFactor <= dI(12)) {
                    setVisibleEmoji(!visibleEmoji)
                }
            }
            if (visibleEmoji) {
                if (scrollFactor > dI(8.75) && scrollFactor < dI(9) || scrollFactor < dI(5.5) || scrollFactor > dI(12)) {
                    setVisibleEmoji(!visibleEmoji)
                }
            }

            if (!visibleSwiss) {
                // console.log("test");

                if (scrollFactor >= dI(7.5) && scrollFactor <= dI(10)) {
                    setVisibleSwiss(!visibleSwiss)
                }
            }
            if (visibleSwiss) {
                if (scrollFactor > dI(10) || scrollFactor < dI(7.5)) {
                    setVisibleSwiss(!visibleSwiss)
                }
            }

            if (!visibleMacbook) {
                // console.log("test");

                if (scrollFactor >= dI(11.5) && scrollFactor <= dI(14)) {
                    setVisibleMacbook(!visibleMacbook)
                }
            }
            if (visibleMacbook) {
                if (scrollFactor > dI(14) || scrollFactor < dI(11.5)) {
                    setVisibleMacbook(!visibleMacbook)
                }
            }

            if (!visibleCoinGrowth) {
                if (scrollFactor >= dI(13) && scrollFactor <= dI(14)) {
                    setVisibleCoinGrowth(!visibleCoinGrowth)
                }
            }
            if (visibleCoinGrowth) {
                if (scrollFactor > dI(14) || scrollFactor < dI(13)) {
                    setVisibleCoinGrowth(!visibleCoinGrowth)
                }
            }

            if (!visibleDataHighway) {
                if (scrollFactor >= dI(14) && scrollFactor <= dI(15.5)) {
                    setVisibleDataHighway(!visibleDataHighway)
                }
            }
            if (visibleDataHighway) {
                if (scrollFactor > dI(15.5) || scrollFactor < dI(14)) {
                    setVisibleDataHighway(!visibleDataHighway)
                }
            }

            if (!visibleEmojiTwo) {
                if (scrollFactor >= dI(15) && scrollFactor <= dI(16.5)) {
                    setVisibleEmojiTwo(!visibleEmojiTwo)
                }
            }
            if (visibleEmojiTwo) {
                if (scrollFactor > dI(16.5) || scrollFactor < dI(15)) {
                    setVisibleEmojiTwo(!visibleEmojiTwo)
                }
            }

            if (!visibleDollarSign) {
                if (scrollFactor >= dI(16) && scrollFactor <= dI(18.75)) {
                    setVisibleDollarSign(!visibleDollarSign)
                }
            }
            if (visibleDollarSign) {
                if (scrollFactor > dI(18.75) || scrollFactor < dI(16)) {
                    setVisibleDollarSign(!visibleDollarSign)
                }
            }


            if (!visibleCombinationLock) {
                if (scrollFactor >= dI(18) && scrollFactor <= dI(19.5)) {
                    setVisibleCombinationLock(!visibleCombinationLock)
                }
            }
            if (visibleCombinationLock) {
                if (scrollFactor > dI(19.5) || scrollFactor < dI(18)) {
                    setVisibleCombinationLock(!visibleCombinationLock)
                }
            }

        }, [
            visibleLight, scrollFactor, windowHeight,
            visiblePOSMachine, visibleRobot, visibleIPhone,
            visiblePuzzle, visibleEmoji, visibleSwiss, visibleCoinGrowth,
            visibleMacbook, dI, visibleDataHighway, visibleDollarSign, visibleEmojiTwo, visibleCombinationLock
        ])



        return (
            <div className="three-scene">
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

                        {/* light bulb model */}
                        <MotionGroup
                            ref={lightRef}
                            visible={visibleLight}
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
                            ref={botRef}
                            visible={visibleRobot}
                            castShadow
                            scale={robotMotion().scale}
                            position={[robotMotion().x, robotMotion().y, robotMotion().z]}
                            rotation={[robotMotion().rotationX, robotMotion().rotationY, robotMotion().rotationZ]}
                        >
                            <MemoizedSphereBot />

                        </MotionGroup>

                        {/* pos machine model */}
                        <MotionGroup
                            ref={posMachineRef}
                            visible={visiblePOSMachine}
                            castShadow
                            scale={posMachineMotion().scale}
                            position={[posMachineMotion().x, posMachineMotion().y, posMachineMotion().z]}
                            rotation={[posMachineMotion().rotationX, posMachineMotion().rotationY, posMachineMotion().rotationZ]}
                        >
                            <MemoizedPOSMachine />
                        </MotionGroup>

                        {/* iPhone model */}
                        <MotionGroup
                            ref={iPhoneRef}
                            visible={visibleIPhone}
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
                            ref={puzzleRef}
                            visible={visiblePuzzle}
                            castShadow
                            scale={puzzleMotion().scale}
                            position={[puzzleMotion().x, puzzleMotion().y, puzzleMotion().z]}
                            rotation={[puzzleMotion().rotationX, puzzleMotion().rotationY, puzzleMotion().rotationZ]}
                        >
                            <Float
                                floatIntensity={1.5}
                                rotationIntensity={1.5}
                            >
                                <MemoizedPuzzle />
                            </Float>
                        </MotionGroup>

                        {/* emoji model */}
                        <MotionGroup
                            ref={emojiRef}
                            visible={visibleEmoji}
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
                            ref={swissArmyKnifeRef}
                            visible={visibleSwiss}
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
                            ref={macbookRef}
                            visible={visibleMacbook}
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
                            ref={coinGrowthRef}
                            visible={visibleCoinGrowth}
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
                            ref={dataHighwayRef}
                            visible={visibleDataHighway}
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
                            ref={emojiTwoRef}
                            visible={visibleEmojiTwo}
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
                            ref={dollarSignRef}
                            visible={visibleDollarSign}
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

                        {/* bank vault model */}
                        <MotionGroup
                            visible={visibleCombinationLock}
                            castShadow
                            scale={combinationLockMotion().scale}
                            position={[combinationLockMotion().x, combinationLockMotion().y, combinationLockMotion().z]}
                            rotation={[combinationLockMotion().rotationX, combinationLockMotion().rotationY, combinationLockMotion().rotationZ]}
                        >
                                <MemoizedCombinationLock />
                        </MotionGroup>




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
            </div>
        )
    }



export default MainProgrammerScene;
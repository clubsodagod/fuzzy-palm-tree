'use client'
import { MotionGroup } from '@/app/_components/framer/MotionGroup'
import { useScroll } from '@/app/_context/sub-context/ScrollContext';
import { useAboutMotionLogic } from '@/app/about/_utils/about-motion';
import { MarbleColumn, Diamonds, Bee, RubiksCube, Compass, City, PumpingHeart, Atom, TropicalIsland } from '@/public/3d-objects';
import { Scale, Book, Hive } from '@mui/icons-material';
import { Float } from '@react-three/drei'
import { MotionValue } from 'framer-motion';
import React from 'react'
import { VisibleType } from '../mission-statement/MissionStatementExperience';

const CoreValuesExperience:React.FC<{scrollY:MotionValue, visible: VisibleType }> = ({scrollY, visible}) => {
    
    const {
        dynamicIncrement: dI
    } = useScroll();
    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2),
    ];
    const { moonMotion, powerTowerMotion, mainMotion, columnMotion, coreValueMotion } = useAboutMotionLogic(scrollY, homeEventPoints)

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
    return (

        <MotionGroup
            position={[columnMotion().x, columnMotion().y, columnMotion().z]}
        >

            {/* column */}
            <MotionGroup
                visible={visible.marbleColumn}
                scale={columnMotion().scale}
            >
                <MemoizedMarbleColumn />
            </MotionGroup>

            <MotionGroup
                scale={coreValueMotion().scale}
                position={[coreValueMotion().x, coreValueMotion().y, coreValueMotion().z]}
            >

                {/* atom */}
                <MotionGroup
                    visible={false}
                    position={[35, 75, 0]}
                >
                    <MemoizedAtom scale={16} />
                </MotionGroup>

                {/* scale */}
                <MotionGroup
                    position={[0, 40, 0]}
                    visible={false}
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

                {/* rubiks cube */}
                <MotionGroup
                    position={[-5, 45, 0]}
                    visible={false}
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

                {/* pumping heart */}
                <MotionGroup
                    position={[-1, 45, 0]}
                    visible={true}
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


                {/* diamonds */}
                <MotionGroup
                    position={[0, 1, 0]}
                    visible={false}
                >
                    <MemoizedDiamonds
                        rotation-y={3.75}
                        scale={18}
                    />
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
                            <MemoizedBee
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
                            <MemoizedHive
                                scale={0.02}
                            />
                        </MotionGroup>

                    </Float>
                </MotionGroup>

                {/* bee buddy */}
                <MotionGroup
                    position={[-14, 52, 5]}
                    visible={false}
                >
                    <MemoizedBeeBuddy
                        animation='_bee_hover'
                        props={{
                            scale: 0.25
                        }}
                    />
                </MotionGroup>



                {/* city */}
                <MotionGroup
                    position={[-10, 52, 15]}
                    rotation-x={0.45}
                    rotation-y={0.45}
                    visible={false}
                >
                    <MemoizedCity
                        animation='Main'
                        props={{
                            scale: 0.0375
                        }}
                    />
                </MotionGroup>

                {/* tropical island */}
                <MotionGroup
                    rotation-y={0}
                    position={[0, 0, 25]}
                    visible={false}
                >
                    <MemoizedTropicalIsland
                        animation='ArmatureAction'
                        props={{
                            scale: 45
                        }}
                    />
                </MotionGroup>

                {/* compass */}
                <MotionGroup
                    rotation-x={1}
                    position={[-15, 50, 25]}
                    visible={false}
                >
                    <Float
                        floatIntensity={1}
                    >
                        <MemoizedCompass
                            animation={['rotating cylinderAction', 'needleAction']}
                            props={{
                                scale: 0.35
                            }}
                        />
                    </Float>
                </MotionGroup>

                {/* book */}
                <MotionGroup
                    rotation-y={0}
                    position={[-5, 49, 0]}
                    visible={false}
                >
                    <Float
                        floatIntensity={0.5}
                    >
                        {/* <MemoizedBook
                            animation='Take 001'
                            props={{
                                scale: 2
                            }}
                        /> */}
                    </Float>

                </MotionGroup>

            </MotionGroup>

        </MotionGroup>
    )
}

export default CoreValuesExperience
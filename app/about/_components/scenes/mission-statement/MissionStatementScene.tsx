'use client'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionValue } from 'framer-motion'
import React, { Suspense, useEffect } from 'react'
import MissionStatementExperience from './MissionStatementExperience'

const MissionStatementScene: React.FC<{
    scrollY: MotionValue,
    value: number,
}> = ({
    scrollY,
    value
}) => {


        const prime = scrollY.get();
        const pastPrime = scrollY.getPrevious();
        const scalingFactor = () => Math.min(Math.max(window?.innerWidth / 1920, window?.innerWidth > 700 && window?.innerWidth < window?.innerHeight ? 0.8 : 0.6), 3);

        useEffect(() => {

            const functionHandler = () => {
                if (prime !== pastPrime) {

                    console.log(scalingFactor());
                }
            };

            functionHandler();

        }, [pastPrime, prime, scalingFactor])

        return (
            <Canvas
                dpr={[1, 1.5]}
                style={{
                    pointerEvents: 'none',
                    position: 'fixed',
                    top: 0,
                    zIndex: -1,
                }}
                shadows
                camera={{
                    position: [0, 0, 60],
                    fov: 50,
                }}
            >
                <Suspense fallback={null}>


                    <MissionStatementExperience
                        value={value}
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

                    <mesh rotation={[-Math.PI / 6, 0, 0]} position={[0, -5, -25]} receiveShadow >
                        <circleGeometry args={[400]} />
                        <shadowMaterial
                            opacity={0.3}
                        />
                    </mesh>
                </Suspense>
            </Canvas>
        )
    }

export default MissionStatementScene
'use client'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionValue } from 'framer-motion'
import React, { Suspense, useEffect } from 'react'
import MissionStatementExperience from './AboutExperience'

const AboutScene: React.FC<{
    value: number,
}> = ({
    value
}) => {




        return (
                <Suspense fallback={null}>
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


                    <MissionStatementExperience
                        value={value}
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
            </Canvas>
                </Suspense>
        )
    }

export default AboutScene
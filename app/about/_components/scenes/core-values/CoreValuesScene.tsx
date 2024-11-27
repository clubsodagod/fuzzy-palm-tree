'use client'
import React, { Suspense, useEffect, lazy, useState, StrictMode } from 'react'
// import MissionStatementExperience from './AboutExperience'
import dynamic from 'next/dynamic';
import ShadowCatcher from '@/app/_components/common/three/lights/ShadowCatcher';
import StandardLights from '@/app/_components/common/three/lights/StandardLights';
import { MotionValue, motionValue, useScroll } from 'framer-motion';
import ThreeWindowUpdater from '@/app/_utility/window/ThreeWindowUpdater';
import { useAppContext } from '@/app/_context/AppContext';
import { Canvas } from '@react-three/fiber';
import CoreValuesExperience from './CoreValuesExperience';
import { VisibilityThreeType } from '@/app/_library/types/common';






const CoreValueScene: React.FC<{
    value: number,
    scrollY: MotionValue,
}> = ({
    value, scrollY
}) => {







        return (



            <>
                <Canvas
                    dpr={[1, 1.5]}
                    style={{
                        pointerEvents: "none",
                        position: "fixed",
                        top: 0,
                        zIndex: 0,
                    }}
                    shadows
                    camera={{
                        position: [0, 0, 60],
                        fov: 50,
                    }}
                >
                    <CoreValuesExperience
                        value={value}
                        scrollY={scrollY}
                    />
                    
            <StandardLights />
            <ShadowCatcher />
                </Canvas>

            </>


        )
    }

export default CoreValueScene
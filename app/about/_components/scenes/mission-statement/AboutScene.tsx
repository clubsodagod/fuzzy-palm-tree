'use client'
import { Environment } from '@react-three/drei'
import { MotionValue } from 'framer-motion'
import React, { Suspense, useEffect, lazy, useState } from 'react'
import MissionStatementExperience from './AboutExperience'
import { Canvas } from '@react-three/offscreen'


const Scene = lazy(() => import("./AboutExperience"));


const AboutScene: React.FC<{
    value: number,
}> = ({
    value
}) => {


        const [worker, setWorker] = useState<Worker | null>(null);

        useEffect(() => {
            // Only initialize the worker in the browser
            if (typeof window !== 'undefined') {
                const newWorker = new Worker(
                    new URL('../../../_utils/three-worker.tsx', import.meta.url),
                    { type: 'module' }
                );
                setWorker(newWorker);

                // Cleanup worker on unmount
                return () => {
                    newWorker.terminate();
                };
            }
        }, []);


        return (
            <Suspense fallback={null}>

                {worker && (
                    <Canvas
                        worker={worker}
                        fallback={<Scene value={value} />}
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
                    />
                )}

            </Suspense>
        )
    }

export default AboutScene
'use client'
import React, { Suspense, useEffect, lazy, useState, StrictMode } from 'react'
import MissionStatementExperience from './AboutExperience'
import { Canvas } from '@react-three/offscreen'
import AppProvider from '@/app/_context/AppContext'
import dynamic from 'next/dynamic';

const AboutExperience = dynamic(() => import('./AboutExperience'), {
  ssr: false, // Optional: Disable server-side rendering for this component
});





const AboutScene: React.FC<{
    value: number,
}> = ({
    value
}) => {


        const [worker, setWorker] = useState<Worker | null>(null);
        console.debug('Experience')

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
            <StrictMode>
                <Suspense fallback={null}>

                    {worker && (
                        <Canvas
                            worker={worker}
                            fallback={<AboutExperience value={value} />}
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
            </StrictMode>


        )
    }

export default AboutScene
'use client'
import React, { Suspense, useEffect, lazy, useState, StrictMode } from 'react'
import MissionStatementExperience from './AboutExperience'
import { Canvas } from '@react-three/offscreen'
import dynamic from 'next/dynamic';






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
                    new URL('/public/workers/three-worker.tsx', import.meta.url),
                    { type: 'module' },
                );
                setWorker(newWorker);

                // Cleanup worker on unmount
                return () => {
                    newWorker.terminate();
                };
            }
        }, []);


        return (
            <Suspense fallback={
                <div className="w-full flex items-center justify-center h-[calc(100vh-300px)] font-bold text-[30px] font-mono text-white">
                  loading...
                </div>}>

                {worker && (
                    <Canvas
                        worker={worker}
                        fallback={
                            <MissionStatementExperience
                                value={value}
                            />
                        }
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
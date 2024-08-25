'use client'

import { Chess } from '@/public/3d-objects'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useTransform, useScroll, useMotionValueEvent, MotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import React, { RefObject, Suspense } from 'react'

const InvestmentApproachScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue
}) => {    




    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log(latest)

    // })
    const opacity = useTransform(scrollYProgress, [0.25,  0.3], [1,0]);
    const scale = useTransform(scrollY, [0,    (ctnHeightValue - (ctnHeightValue/2)), ctnHeightValue], [0.0625,0.045125, 0.015525]);
    const x = useTransform(scrollY, [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], [0,17,0]);
    const y = useTransform(scrollY, [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], [0,5,5]);
    // console.log(scrollY);


    return (
        
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
                style={{position:'fixed'}}
            >                        
                <Suspense fallback={null}>
                <Environment 
                preset='studio'
                />
                <ambientLight />

                    <motion.group initial={{scale:0.0625}} scale={scale}  position={[x,y,0]}>
                        <Center>
                                <Chess  rotation={[0.5,0.75 ,0]}/>
                        </Center>
                    </motion.group>
                            <directionalLight
                            position={[2,5,2]}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                            />
                </Suspense>
            


            </Canvas>      
    )
}

export default InvestmentApproachScene
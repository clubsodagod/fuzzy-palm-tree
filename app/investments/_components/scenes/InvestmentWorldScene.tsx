import { Earth } from '@/public/3d-objects'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionValue, useTransform } from 'framer-motion'
import React, { Suspense } from 'react'

const InvestmentWorldScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue
}) => {        
    
    const opacity = useTransform(scrollYProgress, [0.25,  0.3], [1,0]);
    const scale = useTransform(scrollY, [0,    (ctnHeightValue - (ctnHeightValue/2)), ctnHeightValue], [0.0625,0.045125, 0.015525]);
    const x = useTransform(scrollY, [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], [0,17,0]);
    const y = useTransform(scrollY, [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], [0,5,5]);

    return (
        
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >                        
                <Suspense fallback={null}>
                <Environment 
                preset='studio'
                />
                <ambientLight />
                <OrbitControls />

                <group>
                    <Center>

                        <Earth scale={0.0125} />                  
                    </Center>                    
                </group>

                            {/* <directionalLight 
                            position={[2,5,2]}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                            /> */}
                </Suspense>
            


            </Canvas>      
    )
}

export default InvestmentWorldScene
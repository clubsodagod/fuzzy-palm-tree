import { Earth, ApartmentModel, Chess } from '@/public/3d-objects'
import { Center, Environment, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionValue, useTransform } from 'framer-motion'
import React, { Suspense } from 'react'
import { motion } from 'framer-motion-3d'

const InvestmentWorldScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue
}) => {        
    
    const earthOpacity = useTransform(scrollYProgress, [0.25,  0.3], [1,0]);
    const earthScale = useTransform(scrollY, [0,  (ctnHeightValue*0.175),(ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0.0125,0.00625, 0, 0,0]);
    const earthX = useTransform(scrollY, [0,  (ctnHeightValue*0.175),(ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,-15,-20, 12,0]);
    const earthY = useTransform(scrollY, [0,  (ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,5, 7,5]);
    
    const aptOpacity = useTransform(scrollYProgress, [0.25,  0.3], [1,0]);
    const aptScale = useTransform(scrollY, [0,    (ctnHeightValue*0.33),(ctnHeightValue*0.66),(ctnHeightValue*0.83), ctnHeightValue], [0,0,0,0, 0.5]);
    const aptX = useTransform(scrollY, [0,  (ctnHeightValue*0.175),(ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,-15,0,0, 0,]);
    const aptY = useTransform(scrollY, [0,  (ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,5,6,5]);
    
    const chessOpacity = useTransform(scrollYProgress, [0.25,  0.3], [1,0]);
    const chessScale = useTransform(scrollY, [0,  (ctnHeightValue*0.175),(ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,0, 0.025, 0.0625,0]);
    const chessX = useTransform(scrollY, [0,  (ctnHeightValue*0.175),(ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,-15,-20, 12,0]);
    const chessY = useTransform(scrollY, [0,  (ctnHeightValue*0.33),(ctnHeightValue*0.66),  ctnHeightValue ], [0,5,9,5]);

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
                <OrbitControls />

                    {/* <Center> */}
                        <group>
                                
                            <motion.group initial={{scale:0.0125}} position={[earthX,0,0]} scale={earthScale}><Earth /></motion.group>
                            <motion.group initial={{scale:0}} rotation-x={0.35} position={[chessX,0,0]} scale={chessScale}><Center><Float floatIntensity={4} rotationIntensity={0.5}><Chess /></Float></Center></motion.group>
                            <motion.group initial={{scale:0}} rotation-x={0.35} position={[aptX,0,0]} scale={aptScale}><Center><Float floatIntensity={4} rotationIntensity={0.5}><ApartmentModel /></Float></Center></motion.group>
                                
                                
                                                
                        </group>
                    {/* </Center>   */}

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
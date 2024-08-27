'use client'

import { ApartmentModel, CoinGrowthModel, HouseModel, MoneyBag, Atom, BolsaDeDinero } from '@/public/3d-objects'
import { Float, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas, GroupProps, useFrame } from '@react-three/fiber'
import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion-3d'
import {  useTransform, useScroll, MotionValue } from 'framer-motion'
import * as THREE from 'three'
import { duration } from '@mui/material'
import gsap from 'gsap'
import { GroupType } from './BlogScene'
import MacBook from '@/public/3d-objects/macbook/Macbook'






const HomeScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue
}) => {    


    const qtrCtn = ctnHeightValue / 4;
    const halfCtn = ctnHeightValue / 2;
    const threeQtrCtn = qtrCtn * 3;
    const eighthCtn = ctnHeightValue / 8;
    const threeEighthsCtn = eighthCtn * 3;
    const fiveEightsCtn = eighthCtn * 5;
    const sevenEightsCtn = eighthCtn * 7;





    const mainOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const mainScale = useTransform(scrollY, 
        [0, qtrCtn, halfCtn, threeQtrCtn, ctnHeightValue], 
        [1, 0.125, 0.125, 0.125, 0.125]
    );
    const mainX = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 7, -15, 0, 0, 0, 0, 0, 0]
    );
    const mainY = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 7, 15, 3, 0, 0, 0, 0]
    );





    const developerOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const developerScale = useTransform(scrollY, 
        [0,eighthCtn ,qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [24,48, 72, 96, 1, 1, 1, 1, 1]
    );
    const developerX = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 7, 0, 3, 0, 0, 0, 0]
    );
    const developerY = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, -7, -35, 3, 0, 0, 0, 0]
    );









    const atomOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const atomScale = useTransform(scrollY, 
        [0,eighthCtn ,qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [24,48, 72, 96, 1, 1, 1, 1, 1]
    );
    const atomX = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 7, 0, 3, 0, 0, 0, 0]
    );
    const atomY = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, -7, -35, 3, 0, 0, 0, 0]
    );







    const bolsaOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const bolsaScale = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [3,1, 1, 1, 2, 2.75, 3.5, 1, 1]
    );
    const bolsaX = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
    const bolsaY = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    );








    const investOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const investScale = useTransform(scrollY, 
        [0,eighthCtn ,qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],  
        [0.625,0, 0,0,0.5, 1.1,0.7,0.5, 0.3]
    );
    const investX = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
    const investY = useTransform(scrollY, 
        [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue],
        [0, 0, 0, 0, -5, -20, -20, 0, 0]
    );





    const dailyOpacity = useTransform(scrollYProgress, 
        [0.25,  0.3], 
        [1,0]
    );
    const dailyScale = useTransform(scrollY, 
        [0,    (ctnHeightValue - (ctnHeightValue/2)), ctnHeightValue], 
        [0.0625,0.045125, 0.015525]
    );
    const dailyX = useTransform(scrollY, 
        [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], 
        [0,17,0]
    );
    const dailyY = useTransform(scrollY, 
        [0,  (ctnHeightValue - (ctnHeightValue/2)),  ctnHeightValue ], 
        [0,5,5]
    );



    return (
        <div className="three-scene">
                <Canvas 
                    style={{
                        pointerEvents:'none', 
                        position:'fixed',
                    }}
                    shadows
                    camera={{
                        position: [0,0,60],
                        fov:50,
                    }}
                >   
    
                        
                            
                        {/* Main home hero object group */}
                            <motion.group
                            position={[0,0,0]}
                                        // scale={scale}
                                        position-x={mainX}
                                        position-y={mainY}
                            >
                                

                                        <motion.group position={[bolsaX,bolsaY,0]} scale={bolsaScale}><BolsaDeDinero scale={2} /></motion.group>
                                        

                                        <motion.group position={[developerX,developerY,0]}  scale={developerScale}><MacBook /></motion.group>

                                        {/* <motion.group scale={aptScale}><ApartmentModel scale={0.25} /></motion.group> */}

                                        <motion.group position={[investX,investY,0]}  scale={investScale}><CoinGrowthModel /></motion.group>

                                        <motion.group position={[0,0,0]} scale={atomScale}><Atom /></motion.group>   




                            </motion.group>            


                                    

                            <ambientLight />     

                </Canvas>            
        </div>

    )
}

export default HomeScene
'use client'
import { CoinGrowthModel,  BolsaDeDinero, MacbookModel } from '@/public/3d-objects';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion-3d';
import { MotionValue } from 'framer-motion';
import { shouldRenderObject, useResponsiveValues as useRVs } from '@/utility/functions';
import { useScroll as scroll } from '@/app/context/sub-context/ScrollContext';
import { useMotionLogic } from '@/utility/animation/home-page';
import { useSectionRefs } from '@/utility/refs/home-page-refs';

const HomeScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
    ctnRefs: React.RefObject<HTMLDivElement>[],
}> = ({
    scrollY,
    ctnHeightValue,
    ctnRefs
}) => {    
    const MemoizedBolsaDeDinero = React.memo(BolsaDeDinero);
    const MemoizedMacbookModel = React.memo(MacbookModel);
    const MemoizedCoinGrowthModel = React.memo(CoinGrowthModel);
    
    const { sceneRef:mainRef } = useSectionRefs();

    // I would like to seperate the code starting here *****************
    const {fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn} = scroll();
    const homeEventPoints = [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue];
    

    // Use the custom hook for motion logic
    const { programmerMotion, mainMotion, atomMotion, bolsaMotion, investMotion, dailyMotion } = useMotionLogic(scrollY, homeEventPoints);
    
  




    return (
        <div className="three-scene">
                <Canvas 
                    dpr={[1, 1.5]}
                    style={{
                        // pointerEvents:'none', 
                        position:'fixed',
                        top:0,
                        zIndex:1,
                    }}
                    shadows
                    camera={{
                        position: [0,0,60],
                        fov:50,
                    }}
                >   
    
                    <Suspense fallback={null}>
                        
                        {/* Main home hero object group */}
                        <motion.group
                        castShadow
                        position={[mainMotion().x,mainMotion().y,0]}
                        animate={{
                            x: useRVs([5,5,15]),
                            y: useRVs([-6,-3,7]),
                        }}
                        >
                            {shouldRenderObject(scrollY, halfCtn, ctnHeightValue, 
                                <motion.group 
                                castShadow 
                                initial={{scale: 3}} 
                                position={[bolsaMotion().x,bolsaMotion().y,bolsaMotion().z]} 
                                scale={bolsaMotion().scale}>
                                    <MemoizedBolsaDeDinero 
                                    animate={{animationOrbit:true, animationMain:false}} 
                                    scale={2} />
                                </motion.group>
                            )}
                            {shouldRenderObject(scrollY, halfCtn, ctnHeightValue, 
                                <motion.group 
                                castShadow 
                                initial={{scale: 3}} 
                                position={[programmerMotion().x,programmerMotion().y,programmerMotion().z]} 
                                scale={programmerMotion().scale}>
                                    <MemoizedMacbookModel 
                                    animate={{animationOrbit:true, animationMain:false}} 
                                    scale={2} />
                                </motion.group>
                            )}
                            {shouldRenderObject(scrollY, halfCtn, ctnHeightValue, 
                                <motion.group 
                                castShadow 
                                initial={{scale: 3}} 
                                position={[investMotion().x,investMotion().y,investMotion().z]} 
                                scale={investMotion().scale}>
                                    <MemoizedCoinGrowthModel 
                                    animate={{animationOrbit:true, animationMain:false}} 
                                    scale={2} />
                                </motion.group>
                            )}
                        </motion.group>
        
                        <ambientLight />
                        <directionalLight
                        castShadow
                        position={[0, 0, 3]} // Adjust position as needed
                        intensity={1}
                        shadow-mapSize-width={512}
                        shadow-mapSize-height={512}
                        shadow-camera-far={1000}
                        shadow-camera-near={-100}
                        shadow-camera-right={100}
                        shadow-camera-left={-100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
                        />    
                            
                        <mesh rotation={[-Math.PI/6, 0 , 0]} position={[0,-5,-10]} receiveShadow >
                                <circleGeometry args={[150]} />
                            <shadowMaterial
                            opacity={0.3}
                            />
                        </mesh>  
                    </Suspense>
                            
                </Canvas>            
        </div>
    )
}

export default HomeScene
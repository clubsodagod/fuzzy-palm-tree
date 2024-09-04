'use client'
import { CoinGrowthModel,  BolsaDeDinero, MacbookModel } from '@/public/3d-objects';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion-3d';
import { MotionValue } from 'framer-motion';
import { useResponsiveValues as useRVs } from '@/utility/functions';
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

    const { sceneRef:mainRef } = useSectionRefs();

    // I would like to seperate the code starting here *****************
    const {fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn} = scroll();
    const homeEventPoints = [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue];
    

    // Use the custom hook for motion logic
    const { programmerMotion, mainMotion, atomMotion, bolsaMotion, investMotion, dailyMotion } = useMotionLogic(scrollY, homeEventPoints);
    
    // Function to update positions based on window size
    const UpdatePositions = () => {
        // Access responsive values using useRVs or other logic based on window size
        const updatedMainX = useRVs([5, 5, 15]);
        const updatedMainY = useRVs([-6, -3, 7]);

        // You can use a ref to directly update group positions or set state
        if (mainRef.current) {
            mainRef.current.position.x = updatedMainX;
            mainRef.current.position.y = updatedMainY;
        }
    };

    // useEffect hook to update positions on mount and window resize
    useEffect(() => {
        // Initial position update on mount
        UpdatePositions();

        // Add resize event listener
        window.addEventListener('resize', UpdatePositions);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', UpdatePositions);
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount



    return (
        <div className="three-scene">
                <Canvas 
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
                                    <motion.group castShadow initial={{scale: 3}} position={[bolsaMotion().x,bolsaMotion().y,bolsaMotion().z]} scale={bolsaMotion().scale}><BolsaDeDinero animate={{animationOrbit:true, animationMain:false}} scale={2} /></motion.group>
                                    <motion.group castShadow initial={{scale:24}} rotation={[0,programmerMotion().rotationY, 0]} position={[programmerMotion().x,programmerMotion().y,programmerMotion().z]}  scale={programmerMotion().scale}><MacbookModel ctnRefs={ctnRefs} animate={{animationOrbit:true, animationMain:false}}/></motion.group>
                                    <motion.group castShadow initial={{scale:0.625}} position-x={5} position={[investMotion().x,investMotion().y,investMotion().z]} position-y={0}  scale={investMotion().scale}><CoinGrowthModel animate={{animationOrbit:true, animationMain:false}}/></motion.group>
                        </motion.group>
        
                        <ambientLight />
                        <directionalLight
                        castShadow
                        position={[0, 0, 3]} // Adjust position as needed
                        intensity={1}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={1000}
                        shadow-camera-near={-50}
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
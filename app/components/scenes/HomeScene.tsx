'use client'

import { ApartmentModel, CoinGrowthModel, HouseModel, MoneyBag, Atom, BolsaDeDinero } from '@/public/3d-objects'
import { OrbitControls, Stats, useHelper } from '@react-three/drei'
import { Canvas, GroupProps, useFrame } from '@react-three/fiber'
import React, { LegacyRef, MutableRefObject, RefObject, Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion-3d'
import {  useTransform, useScroll, MotionValue } from 'framer-motion'
import * as THREE from 'three'
import { duration } from '@mui/material'
import gsap from 'gsap'
import { GroupType } from './BlogScene'
import MacBook from '@/public/3d-objects/macbook/Macbook';
import { Animate, useResponsiveValues as useRVs } from '@/utility/functions';
import { useScroll as scroll } from '@/app/context/sub-context/ScrollContext'





const HomeScene:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    ctnHeightValue:number,
    ctnRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue,
    ctnRefs
}) => {    

    const {fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn} = scroll();
    const homeEventPoints = [0,eighthCtn , qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue];
    
    const mainRef = useRef<THREE.Group>(null);
    const directionalLightRef = useRef<THREE.DirectionalLightHelper>(null);

    let developer_scale = [useRVs([36,48,48]), useRVs([72,96,96]), useRVs([72,96,96]), 96, 0, 0, 0, 0, 0];
    let developer_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    let developer_y = [0, 0, useRVs([-5,-5,-5]),  useRVs([-35,-30,-35]),  0, 0, 0, 0, 0];
    let developer_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let developer_rotation_y = [0, 0, -1, 2, 0, 0, 0, 0, 0];
    const programmerMotion = () => Animate(useTransform, scrollY,developer_scale,developer_x,developer_y, developer_z, developer_rotation_y, homeEventPoints);

    let main_scale = [useRVs([5,5,15]), 7, -15, 0, 0, 0, 0, 0, 0];
    let main_x = [useRVs([5,5,15]), 7, -15, 0, 0, 0, 0, 0, 0];
    let main_y = [useRVs([-6,-3,7]), 0, 7, 15, 3, 0, 0, 0, 0];
    let main_z = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let main_rotation_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const mainMotion = () => Animate(useTransform, scrollY, main_scale, main_x, main_y, main_z, main_rotation_y, homeEventPoints);

    let atom_scale = [24,48, 72, 96, 1, 1, 1, 1, 1];
    let atom_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    let atom_y = [0, 0, -7, -35, 3, 0, 0, 0, 0];
    let atom_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let atom_rotation_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const atomMotion = () => Animate(useTransform, scrollY, atom_scale, atom_x, atom_y, atom_z, atom_rotation_y, homeEventPoints);

    let bolsa_scale = [3,0, 0, 0, 2, 2.75, 3.5, 0, 0];
    let bolsa_x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let bolsa_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let bolsa_z = [-10, 0, 0, 0, 0, 0, 0, 0, 0];
    let bolsa_rotation_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bolsaMotion = () => Animate(useTransform, scrollY, bolsa_scale, bolsa_x, bolsa_y, bolsa_z, bolsa_rotation_y, homeEventPoints);

    let invest_scale = [0.625,0, 0,0,0.5, 1.1,0.7,0, 0];
    let invest_x = [useRVs([5,0,20]), 0, 0, 0, 0, 0, 0, 0, 0];
    let invest_y = [0, 0, 0, 0, -5, -20, -20, 0, 0];
    let invest_z = [10, 0, 0, 0, 0, 0, 0, 0, 0];
    let invest_rotation_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const investMotion = () => Animate(useTransform, scrollY, invest_scale, invest_x, invest_y,invest_z, invest_rotation_y, homeEventPoints);

    let daily_scale = [24,48, 72, 96, 1, 1, 1, 1, 1];
    let daily_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    let daily_y = [0, 0, -7, -35, 3, 0, 0, 0, 0];
    let daily_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let daily_rotation_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dailyMotion = () => Animate(useTransform, scrollY, daily_scale, daily_x, daily_y, daily_z, daily_rotation_y, homeEventPoints);

    
    // Function to update positions based on window size
    const UpdatePositions = () => {
        // Access responsive values using useRVs or other logic based on window size
        const updatedMainX = useRVs([5, 5, 15]);
        const updatedMainY = useRVs([-6, -3, 7]);

        // Update positions dynamically here if required
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

    useEffect(()=> {

        if (ctnHeightValue ===0 ) {
            console.log(`Scene useEffect${ctnHeightValue}`);
            console.log(ctnRefs);
            
        }
        
        
    }, [ctnHeightValue, ctnRefs])

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
                                        <motion.group castShadow initial={{scale:24}} rotation={[0,programmerMotion().rotationY, 0]} position={[programmerMotion().x,programmerMotion().y,programmerMotion().z]}  scale={programmerMotion().scale}><MacBook ctnRefs={ctnRefs} animate={{animationOrbit:true, animationMain:false}}/></motion.group>
                                        <motion.group castShadow initial={{scale:0.625}} position-x={5} position={[investMotion().x,investMotion().y,investMotion().z]} position-y={0}  scale={investMotion().scale}><CoinGrowthModel animate={{animationOrbit:true, animationMain:false}}/></motion.group>
                                        {/* <motion.group initial={{scale:useRVs([24,48,72])}} position={[-15,0,0]} scale={atomMotion().scale}><Atom /></motion.group>    */}
   
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

                            {/* Adding Drei helpers */}
                            {/* <OrbitControls />
                            <Stats /> */}
                            
                                <mesh rotation={[-Math.PI/6, 0 , 0]} position={[0,-5,-10]} receiveShadow >
                                        <circleGeometry args={[150]} />
                                    <shadowMaterial
                                    opacity={0.3}
                                    />
                                </mesh>  

                            {/* Adding Three.js helpers */}
                            {/* <primitive object={new THREE.AxesHelper(10)} />
                            <primitive object={new THREE.GridHelper(100, 100)} /> */}
                    </Suspense>
                            
                </Canvas>            
        </div>
    )
}

export default HomeScene
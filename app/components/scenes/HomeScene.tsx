'use client'

import { ApartmentModel, CoinGrowthModel, HouseModel, MoneyBag, Atom } from '@/public/3d-objects'
import { Float, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas, GroupProps, useFrame } from '@react-three/fiber'
import React, { LegacyRef, MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion-3d'
import {  useTransform, useScroll } from 'framer-motion'
import * as THREE from 'three'
import { duration } from '@mui/material'
import gsap from 'gsap'
import { GroupType } from './BlogScene'






const HomeScene = () => {


    const { scrollYProgress } = useScroll({});

    const scale = useTransform(scrollYProgress,[0,0.2], [1,0]);
    const x = useTransform(scrollYProgress,[0,0.2],[0,25])
    const opacity = useTransform(scrollYProgress,[0,0.2], [1,0])



    return (
        <section   className='three-scene' id='home'>
            <Canvas 
                style={{pointerEvents:'none'}}
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >   
                {/* <ScrollControls
                prepend
                enabled

                > */}
                    
                        

                        <motion.group  
                        position={[0,0,0]}
                                    // scale={scale}
                                    // position-x={x}
                                    initial={{opacity:0}}
                                    animate={{
                                        opacity:1,
                                        transition: {
                                            delay:0.5,
                                            duration:1.4
                                        }
                                    }}
                        >
                            
                                    <motion.group
                                    >
                                        <Float rotationIntensity={5} floatIntensity={1} >
                                            <MoneyBag scale={2} />
                                        </Float>  
                                        <ApartmentModel scale={0.25} />
                                        <HouseModel scale={0.25} />
                                        <Atom />                                     
                                    </motion.group>  
                            </motion.group>            
                {/* </ScrollControls> */}

                                

                        <ambientLight />     

            </Canvas>
        </section>
    )
}

export default HomeScene
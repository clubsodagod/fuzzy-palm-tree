'use client'

import { useIsMobile } from '@/app/context/sub-context/ScreenContext'
import { CoinGrowthModel } from '@/public/3d-objects'
import { Center, OrbitControls} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useTransform, useScroll } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import React from 'react'
import * as THREE from 'three';


const Investments = () => {
    
    const { scrollYProgress,scrollY } = useScroll({});


    const scale = useTransform(scrollYProgress,[0.32,0.5], [0.95,0]);
    const x = useTransform(scrollYProgress,[0.32,0.5],[0,-25])
    const z = useTransform(scrollYProgress,[0.32,0.5],[0,25])
    
    const viewport = useThree((state) => state.viewport)

    return (
        <Center  position={[0,0,0]} scale={1}>
            <motion.group initial={{x:0}}>
                <ambientLight />
                <CoinGrowthModel  animate={{animationOrbit:true, animationMain:false}}/>
            </motion.group>                        
        </Center>        
    )
}

const InvestmentScene = () => {

    let y:number = -9
    const { isMobile } = useIsMobile();
    const { scrollYProgress,scrollY } = useScroll({});
    console.log(scrollYProgress);
    
    const opacity = useTransform(scrollYProgress,[0,0.2], [1,0])

    return (
        
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >

                    <Investments />
            


            </Canvas>            
     
    )
}

export default InvestmentScene
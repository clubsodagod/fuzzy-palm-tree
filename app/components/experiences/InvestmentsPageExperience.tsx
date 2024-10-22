'use client'
import React from 'react';
import Scene from '../common/Scene';
import { motion } from 'framer-motion-3d';
import { Earth, Chess, ApartmentModel } from '@/public/3d-objects';
import { Center, Environment, Float } from '@react-three/drei';
import { useMotionLogic } from '@/utility/animation/investments-page';
import { useScroll } from '@/app/context/sub-context/ScrollContext';
import { MotionValue } from 'framer-motion';




const Experience = ({ scrollY }: { scrollY: MotionValue }) => {

    const { dynamicIncrement: dI } = useScroll();
    const eventPoints = [0, dI(0.5), dI(1), dI(1.5), dI(2)];
    const {
        earthMotion, chessMotion, aptMotion,
    } = useMotionLogic(scrollY, eventPoints);

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.85 : 0.7), 3) : 1;

    return (
        <>
            <group
                scale={mainScalingFactor}
            >
                <motion.group initial={{ scale: 0, x: -25 }} animate={{
                    scale: earthMotion().scale.get(), x: earthMotion().x.get(), transition: {
                        duration: 1
                    }
                }} position={[earthMotion().x, earthMotion().y, earthMotion().z]} scale={earthMotion().scale}>
                    <Earth />
                </motion.group>
                <motion.group initial={{ scale: 0 }} rotation-x={0.35} rotation-y={chessMotion().rotationY} position={[chessMotion().x, chessMotion().y, chessMotion().z]} scale={chessMotion().scale}>
                    <Center>
                        <Float floatIntensity={4} rotationIntensity={0.5}>
                            <Chess />
                        </Float>
                    </Center>
                </motion.group>
                <motion.group initial={{ scale: 0 }} rotation-x={0.35} rotation-y={aptMotion().rotationY} position={[aptMotion().x, aptMotion().y, aptMotion().z]} scale={aptMotion().scale}>
                    <Center>
                        <Float floatIntensity={1} rotationIntensity={0.5}>
                            <ApartmentModel />
                        </Float>
                    </Center>
                </motion.group>
            </group>

        </>
    )
}



const InvestmentsPageScene: React.FC<{
    scrollYProgress: MotionValue,
    scrollY: MotionValue,
    ctnHeightValue: number,
}> = ({
    scrollYProgress,
    scrollY,
    ctnHeightValue
}) => {

        const { halfThirdCtn, oneThirdCtn, twoThirdsCtn, eightyFiveHundredthsCtn } = useScroll();
        const eventPoints = [0, halfThirdCtn, oneThirdCtn, twoThirdsCtn, eightyFiveHundredthsCtn, ctnHeightValue];
        const {
            earthMotion, chessMotion, aptMotion,
        } = useMotionLogic(scrollY, eventPoints);





        return (
            <div className="three-scene">
                <Scene>

                    <Experience scrollY={scrollY} />

                    <ambientLight />
                    <Environment preset='sunset' />
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
                </Scene>
            </div>

        )
    }

export default InvestmentsPageScene;
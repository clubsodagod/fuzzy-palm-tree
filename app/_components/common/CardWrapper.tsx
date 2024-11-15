'use client'
import React from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import { MotionDiv } from './framer/MotionDiv'


const CardWrapper: React.FC<{
    children: React.ReactNode;
}> = ({
    children
}) => {

        const cardX = useMotionValue(0);
        const cardY = useMotionValue(0);
        const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
        const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values

        const handleMouseMove = (event: React.MouseEvent) => {
            const offsetX = event.clientX - window.innerWidth / 2;
            const offsetY = event.clientY - window.innerHeight / 2;

            cardX.set(-offsetX);
            cardY.set(-offsetY);
        };

        const handleMouseLeave = () => {
            cardX.set(0);
            cardY.set(0);
        };


        return (

            <MotionDiv
                whileHover={{
                    scale:1.05
                }}
                className={`card-wrapper`}
                style={{
                    perspective: 800,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                {/* this div can be used as the 'dotted grid' */}
                <MotionDiv
                    style={{
                        margin: "auto",
                        width: "100%",
                        height: "100%",
                        transformStyle: "preserve-3d",
                        perspective: 800,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        rotateX,
                        rotateY
                    }}
                    transition={{ velocity: 0 }}
                    initial={{
                        opacity:"0%",
                    }}
                    whileInView={{
                        opacity:"100%",
                        transition:{
                            duration:1.5,
                        }
                    }}
                >
                    {children}
                </MotionDiv>

            </MotionDiv>
        )
    }



export default CardWrapper;
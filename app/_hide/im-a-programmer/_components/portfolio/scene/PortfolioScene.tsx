import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionValue } from 'framer-motion'
import React, { Suspense } from 'react'
import PortfolioExperience from './PortfolioExperience'
import { ICaseStudy } from '@/library/db/models/case-study'

const PortfolioScene: React.FC<{
    scrollY: MotionValue;
    link:string;
    caseStudy:ICaseStudy;
}> = ({
    scrollY, link, caseStudy
}) => {

    
    return (
        <Canvas
            dpr={[1, 1.5]}
            style={{
                // pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left:0,
                zIndex:0,
            }}
            shadows
            camera={{
                position: [0, 0, 60],
                fov: 50,
            }}
        >
            <Suspense fallback={null}>

                <PortfolioExperience 
                link={link ? link : '/images/desktop-pearl-box.png'}
                scrollY={scrollY}
                caseStudy={caseStudy}
                />

                <ambientLight />
                <Environment preset='warehouse' />
                <directionalLight
                    castShadow
                    position={[0, 0, 3]} // Adjust position as needed
                    intensity={1}
                    shadow-mapSize-width={256}
                    shadow-mapSize-height={256}
                    shadow-camera-far={1000}
                    shadow-camera-near={-100}
                    shadow-camera-right={100}
                    shadow-camera-left={-100}
                    shadow-camera-top={100}
                    shadow-camera-bottom={-100}
                />

                <mesh rotation={[-Math.PI / 6, 0, 0]} position={[0, -5, -10]} receiveShadow >
                    <circleGeometry args={[150]} />
                    <shadowMaterial
                        opacity={0.3}
                    />
                </mesh>
            </Suspense>
        </Canvas>
    )
}

export default PortfolioScene
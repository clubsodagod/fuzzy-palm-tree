import { EmailIcon, GithubIcon, LinkedInIcon, MessengerIcon, PhoneIcon, SocialMediaIcons, YouTubeIcon } from '@/public/3d-objects';
import SocialMediaIconsPro from '@/public/3d-objects/social-media-icons-pro/all/SocialMediaIconsAll';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import React, { Suspense } from 'react'
import LetsWorkExperience from './LetsWorkExperience';


export interface SceneProps {
    scrollY?: MotionValue;
    scrollX?: MotionValue;
}

const LetsWorkScene: React.FC<SceneProps> = ({
    
}) => {

    return (
        <Canvas
            dpr={[1, 1.5]}
            style={{
                position:"relative",
                top: 0,
                zIndex: 1,
            }}
            shadows
            camera={{
                position: [0, 0, 60],
                fov: 50,
            }}
        >
            <Suspense fallback={null}>

                <LetsWorkExperience />
                <ambientLight />
                <OrbitControls />
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



export default LetsWorkScene;
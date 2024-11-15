import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import StandardLights from '@/app/_components/common/three/lights/StandardLights';
import ShadowCatcher from '@/app/_components/common/three/lights/ShadowCatcher';
import HomeExperience from './HomeExperience';

const HomePageScene = () => {
    return (
        <Canvas
            dpr={[1, 1.5]}
            style={{
                pointerEvents: 'none',
                position: 'fixed',
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
                <HomeExperience />
                <StandardLights />
                <ShadowCatcher />
            </Suspense>

        </Canvas>
    )
}

export default HomePageScene
import ShadowCatcher from '@/app/_components/common/three/lights/ShadowCatcher'
import StandardLights from '@/app/_components/common/three/lights/StandardLights'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ProgrammerPageExperience from './ProgrammerPageExperience'

const ProgrammerScene = () => {
    return (
        <Canvas
            dpr={[1, 1.5]}
            style={{
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                zIndex: 0,
            }}
            shadows
            camera={{
                position: [0, 0, 60],
                fov: 50,
            }}
        >
            <Suspense fallback={null}>

                <ProgrammerPageExperience />

                <StandardLights />
                <ShadowCatcher />
            </Suspense>
        </Canvas>
    )
}

export default ProgrammerScene
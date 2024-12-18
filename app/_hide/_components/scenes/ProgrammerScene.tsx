import { CoinGrowthModel } from '@/public/3d-objects'
import MacBook from '@/public/3d-objects/macbook/Macbook'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const ProgrammerScene = () => {
    return (
        <section className='three-scene' id='home'>
        <Canvas
            shadows
            camera={{
                position: [0,0,15],
                fov:10,
            }}
        >
        {/* <OrbitControls /> */}
        <group >
            <ambientLight />
            <MacBook props={{scale:5}}   />
        </group>

        </Canvas>  
        </section>
    )
}

export default ProgrammerScene
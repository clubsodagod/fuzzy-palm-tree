import { CoinGrowthModel } from '@/public/3d-objects'
import { Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const InvestmentsPageScene = () => {

    return (
        
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >

                <Center>

                    <CoinGrowthModel />                    
                </Center>

            


            </Canvas>      
    )
}

export default InvestmentsPageScene
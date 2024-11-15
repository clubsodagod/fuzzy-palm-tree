import { Earth } from '@/public/3d-objects'
import Apartment from '@/public/3d-objects/apartment/Apartment'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const InvestmentAreaScene = () => {

    return (
        
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >                        
                <Suspense fallback={null}>
                <Environment 
                preset='studio'
                />
                <ambientLight />
                <Center>

                    <Apartment scale={0.4} />                  
                </Center>
                            <directionalLight 
                            position={[2,5,2]}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                            />
                </Suspense>
            


            </Canvas>      
    )
}

export default InvestmentAreaScene
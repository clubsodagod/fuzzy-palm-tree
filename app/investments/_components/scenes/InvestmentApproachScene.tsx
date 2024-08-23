import { Chess } from '@/public/3d-objects'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const InvestmentApproachScene = () => {

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
                <OrbitControls />
                <Center>

                    <Chess scale={0.05} rotation={[0.5,0.75 ,0]}/>                  
                </Center>
                            {/* <directionalLight 
                            position={[2,5,2]}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                            /> */}
                </Suspense>
            


            </Canvas>      
    )
}

export default InvestmentApproachScene
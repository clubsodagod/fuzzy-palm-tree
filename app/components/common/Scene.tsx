import { Canvas } from '@react-three/fiber'
import React, { ReactNode, Suspense } from 'react'

const Scene:React.FC<{children:ReactNode}> = ({children}) => {
    return (
        <Canvas 
            style={{
                // pointerEvents:'none', 
                position:'fixed',
                top:0,
                zIndex:1,
            }}
            shadows
            camera={{
                position: [0,0,60],
                fov:50,
            }}>
                
                <Suspense fallback={null}>

                    {children}                            

                    <mesh rotation={[-Math.PI/6, 0 , 0]} position={[0,-5,-10]} receiveShadow >
                            <circleGeometry args={[150]} />
                        <shadowMaterial
                        opacity={0.3}
                        />
                    </mesh>  

                </Suspense>
            </Canvas>  
    )
}

export default Scene;
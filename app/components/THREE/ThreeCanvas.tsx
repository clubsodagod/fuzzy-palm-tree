import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'


function ThreeCanvas(children:any){

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
                {children}
            </Suspense>
        </Canvas>

            
                )
}



                export default ThreeCanvas;
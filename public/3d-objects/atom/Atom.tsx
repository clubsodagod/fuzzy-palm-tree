/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 atom.gltf -t 
Author: Master Ron (https://sketchfab.com/master_ron)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/atom-b505bc59e6fb48569e4f032a0734f743
Title: Atom
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type ActionName = 'Take 01'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    electron_2_0: THREE.Mesh
    electron__3_0: THREE.Mesh
    electron_1_0: THREE.Mesh
    core_0: THREE.Mesh
    electron_shell_0: THREE.Mesh
    electron_shell2_0: THREE.Mesh
    electron_shell3_0: THREE.Mesh
  }
  materials: {
    electron: THREE.MeshStandardMaterial
    core: THREE.MeshStandardMaterial
    electron_shell: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}


export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/3d-objects/atom/atom.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)

  const radius = 6;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (group.current) {  // Ensure that group.current is defined
      // group.current.position.x = radius * Math.cos(elapsedTime);
      group.current.rotation.z += 0.025
    }
  });

  useFrame(() => {
    if(actions['Take 01']) {
      actions['Take 01'].play()
    }
  },)
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" position={[0, 0, 0]}>
        <group name="Sketchfab_model" position={[-0.003, 0.011, -5.077]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="electron_2" position={[0.137, -0.01, -0.077]} rotation={[0.847, 0.748, 3.049]}>
              <mesh name="electron_2_0" geometry={nodes.electron_2_0.geometry} material={materials.electron} >
                <meshPhysicalMaterial 
                clearcoat={1.0}
								clearcoatRoughness={0.1}
								metalness={0.9}
								roughness={0.5}
								color={"0x0000ff"}
								normalScale={new THREE.Vector2( 0.15, 0.15 )}
                />
              </mesh>
            </group>
            <group name="electron__3" position={[0.13, -0.01, -0.099]} rotation={[3.074, -0.096, -0.08]}>
              <mesh name="electron__3_0" geometry={nodes.electron__3_0.geometry} material={materials.electron} >
                <meshPhysicalMaterial 
                clearcoat={1.0}
								clearcoatRoughness={0.1}
								metalness={0.9}
								roughness={0.5}
								color={"0x0000ff"}
								normalScale={new THREE.Vector2( 0.15, 0.15 )}
                />
              </mesh>
            </group>
            <group name="electron_1" position={[0.135, -0.007, -0.083]} rotation={[-1.007, -0.317, 0.466]}>
              <mesh name="electron_1_0" geometry={nodes.electron_1_0.geometry} material={materials.electron} >
                <meshPhysicalMaterial 
                clearcoat={1.0}
								clearcoatRoughness={0.1}
								metalness={0.9}
								roughness={0.5}
								color={"0x0000ff"}
								normalScale={new THREE.Vector2( 0.15, 0.15 )}
                />
              </mesh>
            </group>
            <group name="Lamp" position={[3.674, 4.234, 6.156]} rotation={[-0.254, 0.517, 1.905]}>
              <group name="Lamp_1" />
            </group>
            <group name="core" position={[0.001, -0.002, 0.004]} rotation={[1.006, -0.029, -0.064]} scale={0.505}>
              <mesh name="core_0" geometry={nodes.core_0.geometry} material={materials.core} >
              <meshPhysicalMaterial 
                clearcoat={1.0}
								clearcoatRoughness={0.1}
								metalness={0.9}
								roughness={0.5}
								color={"0x0000ff"}
								normalScale={new THREE.Vector2( 0.15, 0.15 )}
                />
              </mesh>
            </group>
            <group name="electron_shell" rotation={[0.823, 0.745, 3.089]}>
              <mesh name="electron_shell_0" geometry={nodes.electron_shell_0.geometry} material={materials.electron_shell} />
            </group>
            <group name="electron_shell2" rotation={[-0.995, -0.332, 0.453]}>
              <mesh name="electron_shell2_0" geometry={nodes.electron_shell2_0.geometry} material={materials.electron_shell} />
            </group>
            <group name="electron_shell3" rotation={[3.078, -0.097, -0.048]}>
              <mesh name="electron_shell3_0" geometry={nodes.electron_shell3_0.geometry} material={materials.electron_shell} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/atom/atom.gltf')

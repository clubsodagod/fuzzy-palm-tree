/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 infiniteLoop.gltf -t -T -k -K s 
Files: infiniteLoop.gltf [3.44KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\infinite-loop\infiniteLoop-transformed.glb [23.33KB] (-578%)
Author: 3D Crafty (https://sketchfab.com/3DCrafty)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/infinite-loop-6d9ba660a57d4be4b898bf9f7133e985
Title: Infinite LOOP
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
}

export default function InfiniteLoop(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/infiniteLoop-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.material_0} position={[0, 5.664, -34.291]} rotation={[Math.PI / 2, 0, 0]} scale={0.006} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/infinite-loop/infiniteLoop-transformed.glb')

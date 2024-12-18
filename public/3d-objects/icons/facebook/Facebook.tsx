/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Facebook.gltf -k -K -t -T s 
Files: Facebook.gltf [5.48KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\icons\facebook\Facebook-transformed.glb [64.46KB] (-1076%)
Author: pengedarseni (https://sketchfab.com/pengedarseni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-facebook-logo-1847448fc8634d69ace0138030d68b1b
Title: 3D Facebook Logo
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    ['glossy_putih.011']: THREE.MeshStandardMaterial
    glossy_fb: THREE.MeshStandardMaterial
  }
}

export default function Facebook(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d-objects/icons/facebook/Facebook-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['glossy_putih.011']} position={[0, 3, 6]} rotation={[Math.PI / 2, 0, 0]} scale={24.381} />
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.glossy_fb} position={[0, 3, 6]} rotation={[Math.PI / 2, 0, 0]} scale={24.381} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/icons/facebook/Facebook-transformed.glb')

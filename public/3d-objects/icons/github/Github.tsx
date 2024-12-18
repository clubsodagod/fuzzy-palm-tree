/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Github.gltf -k -K -t -T s 
Files: Github.gltf [5.58KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\icons\github\Github-transformed.glb [63.32KB] (-1035%)
Author: pengedarseni (https://sketchfab.com/pengedarseni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-github-logo-441d03d1076b44f483df551e02d970fe
Title: 3D Github Logo
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
    glossy_putih: THREE.MeshStandardMaterial
    github: THREE.MeshStandardMaterial
  }
}

export default function Github(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d-objects/icons/github/Github-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.glossy_putih} position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={28.364} />
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.github} position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={28.364} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/icons/github/Github-transformed.glb')

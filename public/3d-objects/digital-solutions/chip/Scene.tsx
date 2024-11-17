/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf -k -K -t -T s 
Files: scene.gltf [39.73KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\digital-solutions\chip\scene-transformed.glb [4.13MB] (-10299%)
Author: RadioactiveAG (https://sketchfab.com/RadioactiveAG)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chipset-005-b312373e800646b68429a746aba29bc8
Title: CHIPSET 005
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export default function Chip(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d-objects/digital-solutions/chip/scene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/digital-solutions/chip/scene-transformed.glb')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf -k -K -t -T s 
Files: scene.gltf [12.24KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\digital-solutions\idea-lamp\scene-transformed.glb [243.76KB] (-1892%)
Author: Helsingr (https://sketchfab.com/helsingr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/idea-lamp-4c2b7bdc188e4c74b5392e4d967a1a0a
Title: Idea lamp
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Base__0: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshPhysicalMaterial
  }
}

export default function IdeaLamp(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d-objects/digital-solutions/idea-lamp/scene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh name="Base__0" geometry={nodes.Base__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/digital-solutions/idea-lamp/scene-transformed.glb')

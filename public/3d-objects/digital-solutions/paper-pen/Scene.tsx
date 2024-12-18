/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf -k -K -t -T s 
Files: scene.gltf [14.97KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\digital-solutions\paper-pen\scene-transformed.glb [40.04KB] (-167%)
Author: abhijithsince2002 (https://sketchfab.com/abhijithsince2002)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/paper-pen-one-6e7f94bc4fd845e48abee51f2e5c6153
Title: Paper pen one
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type ActionName = 'Animation'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    aiStandardSurface2: THREE.MeshStandardMaterial
    Pen_And_Paper_lambert2: THREE.MeshStandardMaterial
    lambert2: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function PaperPen(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/digital-solutions/paper-pen/scene-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  if (actions.Animation) {
    actions.Animation.play()
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="polySurface18_37" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.aiStandardSurface2} />
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Pen_And_Paper_lambert2} />
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.lambert2} />
          </group>
        </group>
        <group name="group1_30" position={[0.001, -0.02, -0.014]} rotation={[2.308, -0.39, -0.133]} scale={0.01}>
          <group name="polySurface2_29">
            <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.Pen_And_Paper_lambert2} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/digital-solutions/paper-pen/scene-transformed.glb')

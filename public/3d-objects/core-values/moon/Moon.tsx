/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Moon.gltf -k -K -t -T s 
Files: Moon.gltf [12.57KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\core-values\moon\Moon-transformed.glb [626.97KB] (-4888%)
Author: RenderX (https://sketchfab.com/RenderX)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/moon-26cc0b7878bb4d919b68e2be399db466
Title: moon
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type ActionName = 'Sphere|SphereAction'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material001_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/core-values/moon/Moon-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.01}>
          <group name="Sphere" rotation={[-1.264, 0.489, 0.961]} scale={100}>
            <mesh name="Sphere_Material001_0" geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/core-values/moon/Moon-transformed.glb')

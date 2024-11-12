/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Compass.gltf -k -K -t -T s 
Files: Compass.gltf [24.21KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\core-values\compass\Compass-transformed.glb [194.7KB] (-704%)
Author: EwanLejkowski (https://sketchfab.com/EwanLejkowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/compass-5c47b26f85eb4659af66c10c568c1df3
Title: Compass
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type ActionName = 'rotating cylinderAction' | 'needleAction'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.Mesh
    Object_11: THREE.Mesh
    Object_13: THREE.Mesh
    Object_15: THREE.Mesh
    Object_16: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
  }
  materials: {
    plastic: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    glass_top: THREE.MeshStandardMaterial
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

interface CompassThreeProps  {
  animation: ActionName[];
  props: JSX.IntrinsicElements['group'];
}

export default function Compass(props: CompassThreeProps) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/core-values/compass/Compass-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group);
  useFrame(()=> {
    if (actions.needleAction) {
      actions.needleAction.play();
    }
    if (actions['rotating cylinderAction']) {
      actions['rotating cylinderAction'].play()
    }
  });
  return (
    <group ref={group} {...props.props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="rotating_cylinder_3" rotation={[0, 0.051, 0]}>
            <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.plastic} />
            <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial002} />
            <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.glass_top} />
          </group>
          <group name="needle_4" position={[0, 5.393, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.PaletteMaterial003} />
          </group>
        </group>
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 1, 0]} />
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial002} position={[0, 1, 0]} />
        <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.white} position={[0, 1, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/core-values/compass/Compass-transformed.glb')
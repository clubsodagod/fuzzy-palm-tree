/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Puzzle.gltf -k -K -t -T s 
Files: Puzzle.gltf [46.73KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\puzzle\Puzzle-transformed.glb [80.67KB] (-73%)
Author: Anette Rana (https://sketchfab.com/pertrosfoliea)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3december-5-puzzle-ae406b7f6edf471ba2765bf67d105283
Title: 3December 5 - Puzzle
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type ActionName = 'Take 001'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    polySurface1_lambert1_0: THREE.Mesh
    polySurface1_puzzle_0: THREE.Mesh
    polySurface2_lambert1_0: THREE.Mesh
    polySurface2_puzzle_0: THREE.Mesh
    polySurface3_lambert1_0: THREE.Mesh
    polySurface3_puzzle_0: THREE.Mesh
    polySurface4_lambert1_0: THREE.Mesh
    polySurface4_puzzle_0: THREE.Mesh
    polySurface5_lambert1_0: THREE.Mesh
    polySurface5_puzzle_0: THREE.Mesh
    polySurface6_lambert1_0: THREE.Mesh
    polySurface6_puzzle_0: THREE.Mesh
    polySurface7_lambert1_0: THREE.Mesh
    polySurface7_puzzle_0: THREE.Mesh
    polySurface8_lambert1_0: THREE.Mesh
    polySurface8_puzzle_0: THREE.Mesh
    polySurface9_lambert1_0: THREE.Mesh
    polySurface9_puzzle_0: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
    puzzle: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Puzzle(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/puzzle/Puzzle-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group);
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if(actions['Take 001']) {
      actions['Take 001'].play()
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="pCube10_polySurface5" position={[0.072, -0.006, -0.093]}>
          <group name="polySurface1" position={[-0.872, 0, -2.099]} rotation={[-Math.PI, 1.141, -Math.PI]}>
            <mesh name="polySurface1_lambert1_0" geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface1_puzzle_0" geometry={nodes.polySurface1_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface2" position={[-2.057, 0, 1.906]} rotation={[-Math.PI, -1.177, -Math.PI]}>
            <mesh name="polySurface2_lambert1_0" geometry={nodes.polySurface2_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface2_puzzle_0" geometry={nodes.polySurface2_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface3" position={[-2.632, 0, -2.53]} rotation={[0, -0.778, 0]}>
            <mesh name="polySurface3_lambert1_0" geometry={nodes.polySurface3_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface3_puzzle_0" geometry={nodes.polySurface3_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface4" position={[-0.06, 0, -0.084]} rotation={[-Math.PI, -0.508, -Math.PI]}>
            <mesh name="polySurface4_lambert1_0" geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface4_puzzle_0" geometry={nodes.polySurface4_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface5" position={[-0.138, 0, 1.922]} rotation={[0, 0.497, 0]}>
            <mesh name="polySurface5_lambert1_0" geometry={nodes.polySurface5_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface5_puzzle_0" geometry={nodes.polySurface5_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface6" position={[1.058, 0, -1.846]} rotation={[-Math.PI, -1.263, -Math.PI]}>
            <mesh name="polySurface6_lambert1_0" geometry={nodes.polySurface6_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface6_puzzle_0" geometry={nodes.polySurface6_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface7" position={[1.614, 0, 1.969]} rotation={[0, 1.167, 0]}>
            <mesh name="polySurface7_lambert1_0" geometry={nodes.polySurface7_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface7_puzzle_0" geometry={nodes.polySurface7_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface8" position={[2.113, 0, -0.049]} rotation={[0, 0.46, 0]}>
            <mesh name="polySurface8_lambert1_0" geometry={nodes.polySurface8_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface8_puzzle_0" geometry={nodes.polySurface8_puzzle_0.geometry} material={materials.puzzle} />
          </group>
          <group name="polySurface9" position={[-2.721, 0, -0.441]} rotation={[-Math.PI, 0.567, -Math.PI]}>
            <mesh name="polySurface9_lambert1_0" geometry={nodes.polySurface9_lambert1_0.geometry} material={materials.lambert1} />
            <mesh name="polySurface9_puzzle_0" geometry={nodes.polySurface9_puzzle_0.geometry} material={materials.puzzle} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/puzzle/Puzzle-transformed.glb')

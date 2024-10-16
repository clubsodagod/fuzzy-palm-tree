/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Chess.gltf -k -K -t -T s 
Files: Chess.gltf [104.24KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\chess\Chess-transformed.glb [622.56KB] (-497%)
Author: Alexandr (https://sketchfab.com/Ark_9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-0657a328adde41ef978fa181c09955f5
Title: chess
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
    ['Line001_����������_������������_0']: THREE.Mesh
    ['Line002_����������_������������_0']: THREE.Mesh
    ['Line006_������������_������������_0']: THREE.Mesh
    ['Line010_������������_������������_0']: THREE.Mesh
    ['Line010_����������_������������_0']: THREE.Mesh
    ['Line015_����������_������������_0']: THREE.Mesh
    ['Line017_����������_������������_0']: THREE.Mesh
    ['Line025_������������_������������_0']: THREE.Mesh
    ['Line026_������������_������������_0']: THREE.Mesh
    ['Line027_������������_������������_0']: THREE.Mesh
    ['Line032_����������_������������_0']: THREE.Mesh
    ['Line032_������������_������������_0']: THREE.Mesh
    ['Line033_����������_������������_0']: THREE.Mesh
    ['Line033_������������_������������_0']: THREE.Mesh
    ['Line034_������������_������������_0']: THREE.Mesh
    ['Line003_������������_������������_0']: THREE.Mesh
    ['Line003_����������_������������_0']: THREE.Mesh
    ['Plane006_������������_0']: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    material_1: THREE.MeshStandardMaterial
    material_2: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Chess(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/chess/Chess-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  useFrame(()=> {
    if(actions['Take 001']){
      actions['Take 001'].play();
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="Line001" position={[-32.495, 0, -49.123]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh name="Line001_����������_������������_0" geometry={nodes['Line001_����������_������������_0'].geometry} material={materials.material} />
          </group>
          <group name="Line002" position={[-35.305, 0, 17.047]}>
            <group name="Object_9" position={[-8.265, 19.771, 0]}>
              <mesh name="Line002_����������_������������_0" geometry={nodes['Line002_����������_������������_0'].geometry} material={materials.material} />
            </group>
          </group>
          <group name="Line006" position={[-31.756, 0, 327.127]}>
            <group name="Object_30" position={[-8.265, 19.771, 0]}>
              <mesh name="Line006_������������_������������_0" geometry={nodes['Line006_������������_������������_0'].geometry} material={materials.material_1} />
            </group>
          </group>
          <group name="Line010" position={[273.857, 0, -49.104]}>
            <group name="Object_47" position={[-11.444, 36.819, 0]}>
              <mesh name="Line010_������������_������������_0" geometry={nodes['Line010_������������_������������_0'].geometry} material={materials.material_1} />
              <mesh name="Line010_����������_������������_0" geometry={nodes['Line010_����������_������������_0'].geometry} material={materials.material} />
            </group>
          </group>
          <group name="Line015" position={[217.356, 0, 17.047]}>
            <group name="Object_62" position={[-8.265, 19.771, 0]}>
              <mesh name="Line015_����������_������������_0" geometry={nodes['Line015_����������_������������_0'].geometry} material={materials.material} />
            </group>
          </group>
          <group name="Line017" position={[338.899, 0, 17.047]}>
            <group name="Object_68" position={[-8.265, 19.771, 0]}>
              <mesh name="Line017_����������_������������_0" geometry={nodes['Line017_����������_������������_0'].geometry} material={materials.material} />
            </group>
          </group>
          <group name="Line025" position={[397.52, 0, 319.992]}>
            <group name="Object_92" position={[-8.265, 19.771, 0]}>
              <mesh name="Line025_������������_������������_0" geometry={nodes['Line025_������������_������������_0'].geometry} material={materials.material_1} />
            </group>
          </group>
          <group name="Line026" position={[-32.495, 0, 390.064]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh name="Line026_������������_������������_0" geometry={nodes['Line026_������������_������������_0'].geometry} material={materials.material_1} />
          </group>
          <group name="Line027" position={[397.732, 0, 390.064]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh name="Line027_������������_������������_0" geometry={nodes['Line027_������������_������������_0'].geometry} material={materials.material_1} />
          </group>
          <group name="Line032" position={[26.237, 0, -47.179]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
            <group name="Object_103" position={[-15.872, 11.431, 0]}>
              <mesh name="Line032_����������_������������_0" geometry={nodes['Line032_����������_������������_0'].geometry} material={materials.material} />
              <mesh name="Line032_������������_������������_0" geometry={nodes['Line032_������������_������������_0'].geometry} material={materials.material_1} />
            </group>
          </group>
          <group name="Line033" position={[337.215, 0, -47.486]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
            <group name="Object_109" position={[-15.872, 11.431, 0]}>
              <mesh name="Line033_����������_������������_0" geometry={nodes['Line033_����������_������������_0'].geometry} material={materials.material} />
              <mesh name="Line033_������������_������������_0" geometry={nodes['Line033_������������_������������_0'].geometry} material={materials.material_1} />
            </group>
          </group>
          <group name="Line034" position={[337.215, 0, 387.654]} rotation={[-Math.PI, 1.571, 0]} scale={-1}>
            <group name="Object_113" position={[-15.872, 11.431, 0]}>
              <mesh name="Line034_������������_������������_0" geometry={nodes['Line034_������������_������������_0'].geometry} material={materials.material_1} />
            </group>
          </group>
        </group>
        <mesh name="Line003_������������_������������_0" geometry={nodes['Line003_������������_������������_0'].geometry} material={materials.material_1} position={[76.103, 36.819, -49.104]} />
        <mesh name="Line003_����������_������������_0" geometry={nodes['Line003_����������_������������_0'].geometry} material={materials.material} position={[76.103, 36.819, -49.104]} />
        <mesh name="Plane006_������������_0" geometry={nodes['Plane006_������������_0'].geometry} material={materials.material_2} position={[181.816, 0, 171.274]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/chess/Chess-transformed.glb')

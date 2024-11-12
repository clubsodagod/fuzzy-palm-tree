/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 TropicalIsland.gltf -k -K -t -T s 
Files: TropicalIsland.gltf [81.61KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\core-values\tropical-island\TropicalIsland-transformed.glb [2.82MB] (-3354%)
Author: Elin (https://sketchfab.com/ElinHohler)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tropical-island-f91862f8c38b481aa19edccac851eefb
Title: Tropical Island
*/

import * as THREE from 'three'
import React from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'ArmatureAction'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_12: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_31: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    Cat_Palm: THREE.MeshBasicMaterial
    Areca_Palm: THREE.MeshBasicMaterial
    Tropical_Palm: THREE.MeshBasicMaterial
    Treibholz: THREE.MeshBasicMaterial
    Root: THREE.MeshBasicMaterial
    RocksBig: THREE.MeshBasicMaterial
    BeachBaked: THREE.MeshBasicMaterial
    Palme: THREE.MeshBasicMaterial
    Palme_Blaetter: THREE.MeshBasicMaterial
    RocksSmall: THREE.MeshBasicMaterial
    ['Skybox.001']: THREE.MeshBasicMaterial
    ['Material.001']: THREE.MeshBasicMaterial
  }
  animations: GLTFAction[]
}

export interface TropicalIslandThreeProps  {
  animation: ActionName;
  props: JSX.IntrinsicElements['group'];
}
export default function Model(props: TropicalIslandThreeProps) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/3d-objects/core-values/tropical-island/TropicalIsland-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  useFrame(()=> {
    if (actions[props.animation]) {
      actions[props.animation]!.play()
    }
  });
  return (
    <group ref={group} {...props.props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Cat_Palm} position={[3.492, -0.398, 1.482]} rotation={[0.053, -0.004, -0.111]} scale={0.01} />
        <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Areca_Palm} position={[-4.135, -0.127, 0.833]} rotation={[-0.014, -0.002, 0.105]} scale={0.01} />
        <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Tropical_Palm} position={[-1.028, 0.078, 2.394]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.Treibholz} position={[-0.023, 0.053, 1.664]} rotation={[1.631, -0.021, -1.584]} />
        <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.Root} position={[-0.336, 0.006, -1.974]} />
        <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.RocksBig} position={[1.64, -2.196, 12.346]} />
        <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.BeachBaked} position={[-0.28, 0, 0]} />
        <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Palme} position={[2.076, 0.016, -1.778]} rotation={[1.544, -0.079, -2.333]} />
        <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.Palme_Blaetter} position={[2.844, 3.561, -2.033]} rotation={[-3.137, -0.584, -3.103]} />
        <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.RocksSmall} position={[-11.774, -1.788, -7.852]} />
        <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Skybox.001']} position={[-0.019, -1.968, 0]} rotation={[-Math.PI, -0.788, -Math.PI]} scale={0.518} />
        <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.001']} skeleton={nodes.Object_31.skeleton} position={[-0.28, 0.622, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/core-values/tropical-island/TropicalIsland-transformed.glb')
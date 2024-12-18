/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Bull.gltf -t -T -k -K s 
Files: Bull.gltf [424.72KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\rigged-bull\Bull-transformed.glb [415.3KB] (2%)
Author: Leo_Aguiar (https://sketchfab.com/Leo_Aguiar)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-rigged-bull-c1984e43c4014dc5bc332a8fd6b15280
Title: Simple Rigged Bull
*/

import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'rig|rigAction'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Bull(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/3d-objects/rigged-bull/Bull-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Material} skeleton={nodes.Object_10.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/rigged-bull/Bull-transformed.glb')

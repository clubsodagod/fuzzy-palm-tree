/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 PowerTower.gltf -t -T -k -K s 
Files: PowerTower.gltf [169.03KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\core-values\power-tower\PowerTower-transformed.glb [1.46MB] (-765%)
Author: 3DHaupt (https://sketchfab.com/dennish2010)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-solar-power-tower-free-download-0c4a96b5e8474eb38097e5305392a137
Title: Sci-Fi Solar Power Tower (Free-Download)
*/

import * as THREE from 'three'
import React from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Take 01'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Cube003_0: THREE.SkinnedMesh
    Cube002_0: THREE.SkinnedMesh
    Cube000_0: THREE.SkinnedMesh
    Cube040_0: THREE.SkinnedMesh
    Defense_Gun_Tower001_0: THREE.SkinnedMesh
    Defense_Gun_Tower_0: THREE.SkinnedMesh
    Cube001_0: THREE.Mesh
    Defense_Gun_Tower003_1: THREE.Mesh
    Armature_rootJoint: THREE.Bone
    Armature003_rootJoint: THREE.Bone
    Armature002_rootJoint: THREE.Bone
    Armature001_rootJoint: THREE.Bone
    Armature004_rootJoint: THREE.Bone
  }
  materials: {
    Solar_Energy_Platform: THREE.MeshStandardMaterial
    Tower_Ground: THREE.MeshStandardMaterial
    Tower: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/3d-objects/core-values/power-tower/PowerTower-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group);


  useFrame(()=> {
    if (actions['Take 01']) {
      actions['Take 01'].play()
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Root" rotation={[-Math.PI / 2, 0, 0]} scale={0.231}>
          <group name="Armature">
            <primitive object={nodes.Armature_rootJoint} />
            <group name="Defense_Gun_Tower003">
              <mesh name="Defense_Gun_Tower003_1" geometry={nodes.Defense_Gun_Tower003_1.geometry} material={materials.Tower_Ground} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/core-values/power-tower/PowerTower-transformed.glb')

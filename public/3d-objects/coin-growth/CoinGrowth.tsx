/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 coinGrowth.gltf -t -T -k -K s 
Files: coinGrowth.gltf [39.2KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\coin-growth\coinGrowth-transformed.glb [1.33MB] (-3283%)
Author: McWinterL (https://sketchfab.com/winterlea)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/growth-of-coins-money-and-wealth-59174dcc8fab4bcd85b3572dda981f65
Title: growth of coins, money and wealth
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { AnimationOptions, JoinGrowthProps } from '@/library/types/common'
import { useResponsiveValues as useRVs } from '@/utility/functions'

type ActionName = 'CINEMA_4D___'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Arrow_Arrow_0: THREE.Mesh
    Coin_07_Coin_0: THREE.Mesh
    Coin_06_Coin_0: THREE.Mesh
    Coin_05_Coin_0: THREE.Mesh
    Coin_04_Coin_0: THREE.Mesh
    Coin_03_Coin_0: THREE.Mesh
    Coin_02_Coin_0: THREE.Mesh
    Coin_01_Coin_0: THREE.Mesh
    CoinsGroup_CoinGroup_0: THREE.Mesh
    Ground_Ground_0: THREE.Mesh
  }
  materials: {
    Arrow: THREE.MeshStandardMaterial
    Coin: THREE.MeshStandardMaterial
    CoinGroup: THREE.MeshStandardMaterial
    Ground: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function CoinGrowth(props: JSX.IntrinsicElements["group"], ...rest:any) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/3d-objects/coin-growth/coinGrowth-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  const radius = useRVs([38, 6, 48]);
  const radiusZ = useRVs([90,0,24])
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // if (group.current ) {  // Ensure that group.current is defined
    //     if(animate?.animationOrbit){
    //     group.current.position.x = radius * Math.sin(elapsedTime);
    //     group.current.position.y = radius * Math.cos(elapsedTime);
    //     group.current.position.z = radiusZ * Math.sin(elapsedTime);
    //   }
    // }
    if(actions.CINEMA_4D___) {
      actions.CINEMA_4D___.play()
    }
  });

  return (
    <group ref={group} {...props} dispose={null} castShadow>
      <group name="Sketchfab_Scene" scale={5} rotation={[1,0,0]} castShadow>
        <group name="RootNode" scale={0.01} castShadow>
          <group name="Arrow" position={[143.983, 278.053, -192.014]} rotation={[-Math.PI / 2, -Math.PI / 9, 0]} scale={4} castShadow>
            <mesh castShadow name="Arrow_Arrow_0" geometry={nodes.Arrow_Arrow_0.geometry} material={materials.Arrow} />
          </group>
        </group>
        <group name="Coins" position={[0.007, 4.507, -1.43]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} castShadow>
          <group name="Coin_07" position={[-91.143, 188.192, -192.289]} rotation={[1.513, 0.634, -1.563]}>
            <mesh castShadow name="Coin_07_Coin_0" geometry={nodes.Coin_07_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_06" position={[159.27, -72.142, -142.153]} rotation={[-2.147, 0.153, 3.055]}>
            <mesh castShadow name="Coin_06_Coin_0" geometry={nodes.Coin_06_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_05" position={[-12.502, -146.031, -427.099]} rotation={[-2.312, -0.953, 2.718]}>
            <mesh castShadow name="Coin_05_Coin_0" geometry={nodes.Coin_05_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_04" position={[200.324, 249.535, -425.153]} rotation={[-0.814, 1.443, 1.153]}>
            <mesh castShadow name="Coin_04_Coin_0" geometry={nodes.Coin_04_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_03" position={[-288.654, 215.979, -424.283]} rotation={[-2.174, 0.753, 2.309]}>
            <mesh castShadow name="Coin_03_Coin_0" geometry={nodes.Coin_03_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_02" position={[307.853, -210.091, -107.652]} rotation={[-2.053, 0.299, 2.975]}>
            <mesh castShadow name="Coin_02_Coin_0" geometry={nodes.Coin_02_Coin_0.geometry} material={materials.Coin} />
          </group>
          <group name="Coin_01" position={[53.483, -225.959, -46.332]} rotation={[-1.116, 1.079, 1.877]}>
            <mesh castShadow name="Coin_01_Coin_0" geometry={nodes.Coin_01_Coin_0.geometry} material={materials.Coin} />
          </group>
        </group>
        <mesh castShadow name="CoinsGroup_CoinGroup_0" geometry={nodes.CoinsGroup_CoinGroup_0.geometry} material={materials.CoinGroup} position={[0.109, 0.043, -1.94]} scale={0.01} />
        {/* <mesh name="Ground_Ground_0" geometry={nodes.Ground_Ground_0.geometry} material={materials.Ground} position={[0, 0, -2.227]} scale={0.01} /> */}
      </group>
    </group>
  )
}

export default CoinGrowth

useGLTF.preload('/3d-objects/coin-growth/coinGrowth-transformed.glb')

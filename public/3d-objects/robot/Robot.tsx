/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 robot.gltf -t -T -k -K s 
Files: robot.gltf [905.9KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\robot\robot-transformed.glb [4.11MB] (-354%)
Author: ndnguyen3d (https://sketchfab.com/ndnguyen3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-no1-rigged-animated-9f8f0c6fc1ce4fc08e19ead884ee4b98
Title: Robot No.1 - Rigged - Animated
*/

import * as THREE from 'three'
import React from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Scene'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Roundcube010_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube008_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube009_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube011_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube007_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube013_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube020_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube021_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube022_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube023_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder029_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder012_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder013_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder016_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder048_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder049_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder011_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder018_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder019_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder020_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder021_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder047_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder017_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder052_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder053_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder054_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder055_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder078_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder051_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder009_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder010_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder050_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder079_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder008_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere001_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder001_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder007_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder040_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder041_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder056_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder057_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder058_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere004_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere005_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere006_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere007_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere008_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere009_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube003_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube004_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube002_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder034_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder035_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder036_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder037_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube013_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube014_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder086_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder087_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder106_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder107_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder108_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder085_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder126_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder127_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder128_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder129_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder130_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder125_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder133_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder134_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder135_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder136_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder137_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder132_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder083_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder084_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder131_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder138_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder082_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere016_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere017_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder068_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder069_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder081_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder099_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder100_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder109_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder110_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder111_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere020_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere021_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere022_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere023_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere024_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere025_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube017_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube018_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube014_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube015_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder092_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder093_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder095_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder096_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube029_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube030_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder002_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder003_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder004_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder022_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube007_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder023_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder024_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder025_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder026_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder027_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder028_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve001_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve002_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve003_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve004_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve005_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve006_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve007_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder030_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube008_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube009_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube010_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder038_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder039_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder067_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder070_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder071_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder073_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder074_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder075_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder076_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder014_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder015_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder072_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube019_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder088_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder089_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve015_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve016_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve017_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve018_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve019_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve020_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve021_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve022_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder090_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube024_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube025_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube026_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder097_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder098_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder120_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder121_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder122_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder123_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder124_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere002_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere003_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube006_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere010_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere011_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere012_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere013_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere014_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere015_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube002_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube001_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube005_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube001_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube003_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder032_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder033_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube011_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube012_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube015_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere018_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere019_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube021_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere026_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere027_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere028_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere029_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere030_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Sphere031_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube016_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube019_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube020_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube016_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube017_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder091_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder094_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube027_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube028_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cube031_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube004_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube005_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube006_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve008_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve009_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve010_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve011_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve012_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve013_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve014_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Cylinder031_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube012_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Roundcube018_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve023_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve024_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve025_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve026_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve027_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve028_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    BezierCurve029_uv_checker_material_uv_grid_2048x2048_0: THREE.Mesh
    Object_9: THREE.SkinnedMesh
    Object_529: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    uv_checker_material_uv_grid_2048x2048: THREE.MeshStandardMaterial
    // uv_checker_material_uv_grid_2048x2048: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Robot(props: JSX.IntrinsicElements['group'],animate:any) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/3d-objects/robot/robot-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group);
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if(actions['Scene']) {
      actions['Scene'].play()
    }
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.uv_checker_material_uv_grid_2048x2048} skeleton={nodes.Object_9.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
        <skinnedMesh name="Object_529" geometry={nodes.Object_529.geometry} material={materials.uv_checker_material_uv_grid_2048x2048} skeleton={nodes.Object_529.skeleton} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/robot/robot-transformed.glb')

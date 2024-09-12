/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 macbook.gltf -t -T -k -K s 
Files: macbook.gltf [40.86KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\macbook\macbook-transformed.glb [257.21KB] (-529%)
Author: timblewee (https://sketchfab.com/timblewee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/macbook-pro-13-inch-2020-efab224280fd4c3993c808107f7c0b38
Title: Macbook Pro 13 inch 2020
*/

import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { JoinGrowthProps } from '@/library/types/common';
import { useResponsiveValues as useRVs } from '@/utility/functions'

type ActionName = 'Animation'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_12: THREE.Mesh
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_21: THREE.Mesh
    Object_27: THREE.Mesh
  }
  materials: {
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    ['Touch_Bar_Shot_2021-04-02_at_18.13.28']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

const MacBook: React.FC<JoinGrowthProps> = ({ animate, ctnRefs, ...props }) => {
  console.log(ctnRefs);
  
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('3d-objects/macbook/macbook-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  const [currentInView, setCurrentInView] = useState(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(true);

  const radius = useRVs([0.25, 0.25, 1]);
  const radiusZ = useRVs([0,0,1]);
  // console.log(ctnRefs);
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
  
    if (group.current) {  // Ensure that group.current is defined
      if (animate?.animationOrbit) {
        group.current.position.x = radius * Math.sin(elapsedTime / 1.5);
        group.current.position.y = radius * Math.cos(elapsedTime / 1.5);
        group.current.position.z = radiusZ * Math.sin(elapsedTime / 1);
      }
    }
  
    if (actions.Animation) {
      actions.Animation?.play();
      
      // Loop through each ref in ctnRefs
      if(ctnRefs)
      ctnRefs.forEach((element) => {
      // console.log(element.current);
    
        if (element && element.current) { // Check if element and element.current are defined
          const a = element.current.id; // Access ID or any property of the object

          {startAnimation && startAnimation}

          if (startAnimation) {
            if (group.current) {
              if (animate?.animationOrbit) {
                group.current.position.x = radius * Math.sin(elapsedTime / 1.5);
                group.current.position.y = radius * Math.cos(elapsedTime / 1.5);
                group.current.position.z = radiusZ * Math.sin(elapsedTime / 1);
              }
            }
          } if (!startAnimation) {
            if(group.current) {
              group.current.position.x = 0;
              group.current.position.y = 0;
              group.current.position.z = 0;              
            }
          }
        }
      });
    }
  });

  useEffect(() => {
    // Create a function to handle intersections
    const handleIntersection = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentInView(entry.target.id); // Set the ID of the element in view
          if(entry.target.id === 'home-main') {
            setStartAnimation(true);
          } else {
            setStartAnimation(false);
          }
          
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Uses the viewport as the container
      rootMargin: '0px',
      threshold: 0.51 // Adjust this threshold as needed
    });

    // console.log(ctnRefs);
    

    // Attach observer to each container ref
    ctnRefs?.forEach(ref => {
      if (ref) observer.observe(ref.current!);
    });

    // Cleanup the observer on component unmount
    return () => {
      ctnRefs?.forEach(ref => {
        if (ref) observer.unobserve(ref.current!);
      });
    };
  }, [ctnRefs]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="Bevels_2" position={[0, 0.008, -0.104]} scale={0.275}>
            <group name="Empty_1" position={[0, 0.001, 0]} rotation={[-Math.PI, 0, 0]} scale={[-0.039, 0.039, 0.039]}>
              <group name="Camera_Light_0" position={[0, 0.077, -0.044]} rotation={[-1.192, 0, 0]} scale={[-25.381, 25.381, 25.381]}>
                <mesh castShadow name="Object_12" geometry={nodes.Object_12.geometry} material={materials.PaletteMaterial003} />
              </group>
            </group>
            <mesh castShadow name="Object_4" geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} />
            <mesh castShadow name="Object_6" geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial002} />
            <mesh castShadow name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
          </group>
          <group name="Circle001_12" position={[0.203, 0.008, -0.104]} rotation={[0.011, -0.75, 1.274]} />
        </group>
        <mesh castShadow name="Object_14" geometry={nodes.Object_14.geometry} material={materials.PaletteMaterial003} position={[0, -0.014, 0]} scale={0.275} />
        <mesh castShadow name="Object_16" geometry={nodes.Object_16.geometry} material={materials.PaletteMaterial001} position={[0, 0.008, -0.104]} rotation={[1.949, 0, 0]} scale={0.275} />
        <mesh castShadow name="Object_21" geometry={nodes.Object_21.geometry} material={materials.PaletteMaterial004} position={[0, -0.014, 0]} scale={0.275} />
        <mesh castShadow name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Touch_Bar_Shot_2021-04-02_at_18.13.28']} position={[0, -0.014, 0]} scale={0.275} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d-objects/macbook/macbook-transformed.glb')


export default MacBook
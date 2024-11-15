/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Paper.gltf -k -K -t -T s 
Files: Paper.gltf [4.34KB] > C:\Users\owner\Desktop\maliek_davis\public\3d-objects\paper\Paper-transformed.glb [55.82KB] (-1186%)
Author: pozo3d (https://sketchfab.com/pozo3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/folded-wrinkled-paper-9a1d10ebb9a241ffa37b6f6df4adc1f0
Title: Folded Wrinkled Paper
*/

import * as THREE from 'three'
import React from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ICaseStudy } from '@/app/_database/models/case-study'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    blinn1SG: THREE.MeshStandardMaterial
  }
}

export interface ThreeProps {
  props?: JSX.IntrinsicElements['group'];
};

interface PaperThreeProps extends ThreeProps {
  caseStudy: ICaseStudy;
}

export default function Paper(props: PaperThreeProps) {
  const { nodes, materials } = useGLTF('/3d-objects/paper/Paper-transformed.glb') as GLTFResult

  if (props.caseStudy) {
    return (
      <group {...props.props} dispose={null}>
        <group name="Sketchfab_Scene">
          <mesh castShadow receiveShadow name="Object_2" geometry={nodes.Object_2.geometry} material={materials.blinn1SG} rotation={[-Math.PI / 2, 0, 0]} >


            {/* Overlaying HTML */}
            <Html
              position={[0, 0, 0.155]}   // Adjust as needed to align with surface
              rotation={[0, 0, -Math.PI / 2]}
              scale={1}
              transform
              occlude="blending"
              zIndexRange={[1, 0]}      // Controls layering depth to stay on top
              style={{
                width: '40vw',
                height: '100vh',
                background: '#fff9db',
              }}
            >
              <div style={{ background: '#fff9db', padding: '4px 8px', }}>
                <h1>
                  {props.caseStudy.title}
                </h1>
                <div style={{ background: '#fff9db', padding: '4px 8px', width: '100%', height: '100%' }}>
                  <h6>
                    Summary
                  </h6>
                  <ul>
                    <li>
                      {props.caseStudy.summary}
                    </li>

                  </ul>
                </div>
                <div style={{ background: '#fff9db', padding: '4px 8px', width: '100%', height: '100%' }}>
                  <h6>
                    Objectives
                  </h6>
                  <ul>
                    {
                      props.caseStudy.objectives.map((o) => (
                        <li key={o}>
                          {o}
                        </li>
                      ))
                    }


                  </ul>
                </div>
                <div style={{ background: '#fff9db', padding: '4px 8px', width: '100%', height: '100%' }}>
                  <h6>
                    Challenges
                  </h6>
                  <ul>
                    {
                      props.caseStudy.challenges.map((c) => (
                        <li key={c}>
                          {c}
                        </li>
                      ))
                    }


                  </ul>
                </div>
                <div style={{ background: '#fff9db', padding: '4px 8px', width: '100%', height: '100%' }}>
                  <h6>
                    Solutions
                  </h6>
                  <ul>
                    {
                      props.caseStudy.solutions.map((s) => (
                        <li key={s}>
                          {s}
                        </li>
                      ))
                    }


                  </ul>
                </div>
                <div style={{ background: '#fff9db', padding: '4px 8px', width: '100%', height: '100%' }}>
                  <h6>
                    Outcome
                  </h6>
                  <ul>

                    <li >
                      {props.caseStudy.outcomes.description}
                    </li>


                  </ul>
                </div>

              </div>
            </Html>
          </mesh>
        </group>
      </group>
    )
  }

}

useGLTF.preload('/3d-objects/paper/Paper-transformed.glb')

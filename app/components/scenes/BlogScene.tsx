'use client'
import { CoinGrowthModel } from '@/public/3d-objects'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import BlogCard from '../3d-models/blog/BlogCard'
import { blogPosts } from '@/app/database/sample-data'
import * as THREE from 'three'

export type GroupType =  THREE.Group | null;

const BlogScene = () => {

    const position = [0,0,0]

    
    // Create an array of refs for the blog post groups
    const groupRefs = useRef<GroupType[]>([]);

    return (
        <section className="three-scene" id="blog">
            <Canvas
                shadows
                camera={{
                    position: [0,0,60],
                    fov:50,
                }}
            >
            
            <group position={[0,9,0]}>
                <ambientLight />

                {
                    blogPosts.map((p,i:number)=> {

                        // Ensure the ref array has enough elements
                        if (!groupRefs.current[i]) {
                            groupRefs.current[i] = React.createRef<THREE.Group>().current!;
                        }

                        return (
                                <BlogCard
                                position={[(0 + (i*32)),0,0]}
                                post={p} 
                                key={`blog-card-home-object-${i}-${p.title}`} 
                                ref={(el:GroupType) => {
                                    groupRefs.current[i] = el!;
                                }} 
                                />
                        )
                    })
                }
            </group>

            </Canvas>            
        </section>
    )
}

export default BlogScene
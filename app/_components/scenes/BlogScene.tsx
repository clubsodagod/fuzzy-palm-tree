'use client'
import { CoinGrowthModel } from '@/public/3d-objects'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import BlogCard from '../3d-models/blog/BlogCard'
// import { blogPosts } from '@/app/database/sample-data'
import * as THREE from 'three'
import { getAllPostsClient } from '@/utility/blog-section/blog-page-functions'

export type GroupType =  THREE.Group | null;

const BlogScene = () => {
    const [blogPosts, setBlogPosts] = React.useState()
    const blogs = async()=> {
        return await getAllPostsClient()
    }
    
    useEffect(()=> {
        async function handlePosts() {
            setBlogPosts(await blogs())
        }
        handlePosts()
    },[])

    

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
                    blogPosts && blogPosts.map((p,i:number)=> {

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
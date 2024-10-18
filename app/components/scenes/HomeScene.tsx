'use client'
import { CoinGrowthModel, BolsaDeDinero, MacbookModel } from '@/public/3d-objects';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { MotionProps, MotionValue, useMotionValueEvent } from 'framer-motion';
import { debounce, shouldRenderObject, useResponsiveValues as useRVs } from '@/utility/functions';
import { useScroll as scroll } from '@/app/context/sub-context/ScrollContext';
import { useMotionLogic } from '@/utility/animation/home-page';
import { useSectionRefs } from '@/utility/refs/home-page-refs';
import { Float } from '@react-three/drei';
import { MotionDiv } from '../framer/MotionDiv';
import ScrollableItemCtn from '../common/ScrollableItemCtn';
import { getAllPostsClient } from '@/utility/blog-section/blog-page-functions';
import { IBlog, IBlogPopulated } from '@/library/db/models/blog';
import { useScreenContext } from '@/app/context/sub-context/ScreenContext';
import BlogCard2D from '@/app/blog/_components/BlogCard';
import styles from './styles.module.css'
import { useMotionLogic as useMotionLogicPro } from '@/utility/functions';

const HomeScene: React.FC<{
    scrollYProgress: MotionValue,
    scrollY: MotionValue,
    ctnHeightValue: number,
    ctnRefs: React.RefObject<HTMLDivElement>[],
}> = ({
    scrollY,
    ctnHeightValue,
    ctnRefs
}) => {


        const {
            isMobile,
        } = useScreenContext();

        const MemoizedBolsaDeDinero = React.memo(BolsaDeDinero);
        const MemoizedMacbookModel = React.memo(MacbookModel);
        const MemoizedCoinGrowthModel = React.memo(CoinGrowthModel);

        const { sceneRef: mainRef, programmerRef, blogRef } = useSectionRefs();

        const { fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn } = scroll();
        const homeEventPoints = [0, eighthCtn, qtrCtn, threeEighthsCtn, halfCtn, fiveEightsCtn, threeQtrCtn, sevenEightsCtn, ctnHeightValue];


        // Use the custom hook for motion logic
        const { programmerMotion, mainMotion, atomMotion, bolsaMotion, investMotion, dailyMotion } = useMotionLogic(scrollY, homeEventPoints);

        const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();
        const ctnRef = useRef<HTMLDivElement>(null);

        async function initPost() {
            return await getAllPostsClient()
        }



        useEffect(() => {

            async function postsHandler() {
                setPosts(await initPost())
            }

            postsHandler()
        }, [])


        return (
            <div className="three-scene">

                <Canvas
                    dpr={[1, 1.5]}
                    style={{
                        pointerEvents:'none', 
                        position: 'fixed',
                        top: 0,
                        zIndex: 1,
                    }}
                    shadows
                    camera={{
                        position: [0, 0, 60],
                        fov: 50,
                    }}
                >

                    <Suspense fallback={null}>

                        {/* Main home hero object group */}
                        <motion.group
                            castShadow
                            position={[mainMotion().x, mainMotion().y, 0]}
                            animate={{
                                x: mainMotion().x.get(),
                                y: mainMotion().y.get(),
                            }}
                        >
                            {shouldRenderObject(scrollY, halfCtn, ctnHeightValue,
                                <motion.group
                                    castShadow
                                    initial={{ scale: 3 }}
                                    position={[bolsaMotion().x, bolsaMotion().y, bolsaMotion().z]}
                                    scale={bolsaMotion().scale}>
                                    <MemoizedBolsaDeDinero
                                    
                                        scale={2} />
                                </motion.group>
                            )}
                            {shouldRenderObject(scrollY, 0, halfCtn,
                                <Float
                                floatIntensity={2}
                                rotationIntensity={2}
                                >
                                    <motion.group
                                        castShadow
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: programmerMotion().scale.get()
                                        }}
                                        rotation={[0, programmerMotion().rotationY.get(), 0]}
                                        position={[programmerMotion().x, programmerMotion().y, programmerMotion().z]}
                                        scale={programmerMotion().scale}>
                                        <MemoizedMacbookModel
                                            scale={2} />
                                    </motion.group>
                                </Float>

                            )}
                            {shouldRenderObject(scrollY, halfCtn, ctnHeightValue,
                                <motion.group
                                    castShadow
                                    initial={{ scale: 0 }}
                                    position={[investMotion().x, investMotion().y, investMotion().z]}
                                    scale={investMotion().scale}>
                                    <Float
                                        floatIntensity={4}
                                        rotationIntensity={2.5}
                                    >
                                        <MemoizedCoinGrowthModel
                                            scale={2} />
                                    </Float>

                                </motion.group>
                            )}
                        </motion.group>

                        <ambientLight />
                        <directionalLight
                            castShadow
                            position={[0, 0, 3]} // Adjust position as needed
                            intensity={1}
                            shadow-mapSize-width={256}
                            shadow-mapSize-height={256}
                            shadow-camera-far={1000}
                            shadow-camera-near={-100}
                            shadow-camera-right={100}
                            shadow-camera-left={-100}
                            shadow-camera-top={100}
                            shadow-camera-bottom={-100}
                        />

                        <mesh rotation={[-Math.PI / 6, 0, 0]} position={[0, -5, -10]} receiveShadow >
                            <circleGeometry args={[150]} />
                            <shadowMaterial
                                opacity={0.3}
                            />
                        </mesh>
                    </Suspense>

                </Canvas>


                {
                    posts &&
                    posts.length > 0 &&
                    <MotionDiv
                        // className='h-[45vh] absolute w-full top-[83%]'
                        className={`${styles.postsCtn}`}
                    >
                        <ScrollableItemCtn
                            elementRef={ctnRef}
                        >
                            {posts.map((p, i: number) => {

                                return (
                                    <MotionDiv
                                        key={`${p._id} home page blog card isMobile:${isMobile}`}
                                    >
                                        <BlogCard2D blog={p} />
                                    </MotionDiv>
                                )
                            })
                            }
                        </ScrollableItemCtn>
                    </MotionDiv>


                }
            </div>
        )
    }

export default HomeScene
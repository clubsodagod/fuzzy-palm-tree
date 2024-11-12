'use client'
import { CoinGrowthModel, BolsaDeDinero, MacbookModel } from '@/public/3d-objects';
import { Canvas, GroupProps, useThree } from '@react-three/fiber';
import React, { RefObject, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { MotionProps, MotionValue, useInView, useMotionValueEvent, inView } from 'framer-motion';
import { debounce, shouldRenderObject, useResponsiveValues as useRVs } from '@/utility/functions';
import { useScroll as scroll } from '@/app/_context/sub-context/ScrollContext';
import { useMotionLogic } from '@/utility/animation/home-page';
import { useSectionRefs } from '@/utility/refs/home-page-refs';
import { Float } from '@react-three/drei';
import { MotionDiv } from '../framer/MotionDiv';
import ScrollableItemCtn from '../common/ScrollableItemCtn';
import { getAllPostsClient } from '@/utility/blog-section/blog-page-functions';
import { IBlog, IBlogPopulated } from '@/library/db/models/blog';
import { useScreenContext } from '@/app/_context/sub-context/ScreenContext';
import BlogCard2D from '@/app/blog/_components/BlogCard';
import styles from './styles.module.css'
import { useMotionLogic as useMotionLogicPro } from '@/utility/functions';
import { group } from 'console';
import MacBookPro from '@/public/3d-objects/macbook-pro/MacBookPro';
import MacBook from '@/public/3d-objects/macbook/Macbook';



const Experience = ({ scrollY }: { scrollY: MotionValue }) => {

    const viewport = useThree((state) => state.viewport);


    const {
        isMobile,
    } = useScreenContext();

    const ctnRef = React.useRef(null);



    const MemoizedBolsaDeDinero = React.memo(BolsaDeDinero);
    const MemoizedMacbookModel = React.memo(MacbookModel);
    const MemoizedCoinGrowthModel = React.memo(CoinGrowthModel);

    const macbookRef = React.useRef<JSX.IntrinsicElements['group']>(null);
    const coinGrowthRef = React.useRef<JSX.IntrinsicElements['group']>(null);
    const moneyRef = React.useRef<JSX.IntrinsicElements['group']>(null);

    const watchMacbook = macbookRef.current;
    const watchCoin = coinGrowthRef.current;
    const watchMoney = moneyRef.current;




    const { sceneRef: mainRef, programmerRef, blogRef } = useSectionRefs();

    const { fiveEightsCtn, eighthCtn, sevenEightsCtn, qtrCtn, threeEighthsCtn, threeQtrCtn, halfCtn, dynamicIncrement: dI } = scroll();

    const homeEventPoints = useMemo(() => {
        return [
            0, (dI(0.5)),
            (dI(1)), (dI(1.5)),
            (dI(2)), (dI(2.5)),
            (dI(3))
        ]
    }, [dI]);

    // Use the custom hook for motion logic
    const { programmerMotion, mainMotion, atomMotion, bolsaMotion, investMotion, dailyMotion } = useMotionLogic(scrollY, homeEventPoints);

    const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();
    const [scalingFactor, setScalingFactor] = useState<number>(1);
    const [visible, setVisible] = useState({
        macbook: true,
        money: false,
        coin: false,
    });

    async function initPost() {
        return await getAllPostsClient()
    }

    useEffect(() => {
        async function postsHandler() {
            setPosts(await initPost())
        }
        postsHandler()
    }, [])

    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, 0.6), 3) : 1;

    useEffect(() => {
        if (scalingFactor) {
            setScalingFactor(mainScalingFactor);
        }

    }, [mainScalingFactor, scalingFactor]);

    const moneyScale = bolsaMotion().scale.get() * mainScalingFactor
    const coinScale = investMotion().scale.get() * mainScalingFactor
    const macbookScale = programmerMotion().scale.get() * mainScalingFactor

    useEffect(() => {

        if ((macbookScale) > 0) {
            setVisible((prev) => ({
                ...prev,
                macbook: true,
            }))
        } else {
            setVisible((prev) => ({
                ...prev,
                macbook: false,
            }))
        }

        if ((coinScale) > 0) {
            setVisible((prev) => ({
                ...prev,
                coin: true,
            }))
        } else {
            setVisible((prev) => ({
                ...prev,
                coin: false,
            }))
        }
        if ((moneyScale) > 0) {
            setVisible((prev) => ({
                ...prev,
                money: true,
            }))
        } else {
            setVisible((prev) => ({
                ...prev,
                money: false,
            }))
        }



    }, [macbookScale, moneyScale, coinScale, visible])

    return (
        <group
            scale={scalingFactor}
        >
            <motion.group
                castShadow
                position={[mainMotion().x, mainMotion().y, 0]}
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: mainMotion().scale.get(),
                    x: mainMotion().x.get(),
                    y: mainMotion().y.get(),
                    transition: {
                        duration: 1,
                    }
                }}
            >
                <motion.group
                    name='money'
                    ref={moneyRef as unknown as RefObject<GroupProps>}
                    visible={visible.money}
                    castShadow
                    initial={{ scale: 0 }}
                    position={[bolsaMotion().x, bolsaMotion().y, bolsaMotion().z]}
                    scale={bolsaMotion().scale}>
                    <MemoizedBolsaDeDinero

                        scale={2} />
                </motion.group>

                <motion.group
                    name='macbook'
                    ref={macbookRef as unknown as RefObject<GroupProps>}
                    visible={visible.macbook}
                    castShadow
                    initial={{ scale: 0 }}
                    animate={{
                        scale: (programmerMotion().scale.get())
                    }}
                    rotation={[programmerMotion().rotationX, programmerMotion().rotationY, programmerMotion().rotationZ]}
                    position={[programmerMotion().x, programmerMotion().y, programmerMotion().z]}
                    scale={programmerMotion().scale}
                >
                    {/* <Float
                        floatIntensity={0.0625}
                        rotationIntensity={1.25}
                    > */}
                        {/* <MacBookPro props={{scale:0.02, position:[0,-0.5,0] }} link='https://images.pexels.com/photos/6477212/pexels-photo-6477212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> */}
                        <MacBook />
                    {/* </Float> */}
                </motion.group>

                <motion.group
                    name='coin'
                    ref={coinGrowthRef as unknown as RefObject<GroupProps>}
                    visible={visible.coin}
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
            </motion.group>
        </group>
    )

}

const HomeScene: React.FC<{
    scrollYProgress: MotionValue,
    scrollY: MotionValue,
    ctnRefs: React.RefObject<HTMLDivElement>[],
}> = ({
    scrollY,
}) => {
    
    const {
        isMobile,
    } = useScreenContext();
    const ctnRef = React.useRef(null);

    const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();

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
            <>
                <Canvas

                    dpr={[1, 1.5]}
                    style={{
                        pointerEvents: 'none',
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
                        <Experience scrollY={scrollY} />

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
            </>
        )
    }

export default HomeScene
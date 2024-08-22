'use client'
import React, { Suspense, useRef } from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'
import { Button } from '@mui/material'
import HeroButtonCtn from '../../common/HeroButtonCtn'
import { motion } from 'framer-motion'
import ScrollableItemCtn from '../../common/ScrollableItemCtn'
import { Canvas } from '@react-three/fiber'
import Book from '../../common/Book'
import { Environment } from '@react-three/drei'

const RealEstateAvailable = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
        <OuterSceneWrapper id='real-estate-page'>

            <section className='three-scene' id='' key={'real-estate-page-key'}>

                <ScrollableItemCtn elementRef={containerRef} key={'real-estate-page-key-2'}>
                    <Canvas
                    shadows
                    camera={{ position: [-0.5, 1, 4], fov: 45 }} 
                    style={{height:"100vh", width:'100%'}}

                    >
                        <Suspense fallback={null}>
                            <Environment 
                            preset='studio'
                            />
                            <ambientLight />
                            <directionalLight 
                            position={[2,5,2]}
                            intensity={2.5}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                            />
                            <Book />                            
                        </Suspense>

                    </Canvas>
                    
                </ScrollableItemCtn>
            </section>

                <PageWrapper>
                    

                    <div
                    className={` ${styles.topTextCtn}`}
                    >
                        <h1 className={` ${styles.investHeader}`}>
                            Assets for Sale
                        </h1>
                        <h6>
                            Take a look. There&apos;s returns in your future.
                        </h6>
                    </div>


                    <div
                    className={`${styles.txtBtnCtn}`}
                    >
                        
                        <p className={`${styles.heroBtnCtnTxt}`} >

                            
                        </p>
                        <HeroButtonCtn>
                                    <Button
                                    variant='outlined'
                                    className={`learn-more-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments'}
                                    >
                                        Make an Offer
                                    </Button>
                                    <Button
                                    variant='contained'
                                    className={`partnership-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments/partnership'}
                                    >
                                        More Information
                                    </Button>                        
                        </HeroButtonCtn>
                    </div>
                    


                </PageWrapper>
        </OuterSceneWrapper>
    )
}

export default RealEstateAvailable
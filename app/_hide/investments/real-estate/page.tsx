'use client'
import { AppContainer, ScrollableItemCtn } from '@/app/_hide/_components'
import { RealEstateAvailable, RealEstateCriteria, RealEstateCTA, RealEstatePageHero, RealEstatePosts } from '@/app/_hide/_components/investment-page'
import { useInvestmentsPageSectionRefs } from '@/utility/refs/investments-page-refs'
import { useScroll, useAnimationControls, useMotionValueEvent } from 'framer-motion'
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useScroll as scroll } from '@/app/_hide/_context/sub-context/ScrollContext';
import { investmentsRealEstatePage as gradientVariants } from '@/library/const/animation-gradients'
import { Book } from '@mui/icons-material'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Page = () => {
    const [currentSection, setCurrentSection] = useState<string>('');

    const { 
        realEstateMainRef, realEstateCriteriaRef, 
        realEstateAvailableRef, realEstateCTARef, 
        realEstatePostsRef, realEstateCtnRef:ctnRef, realEstateRefs:refs 
    } = useInvestmentsPageSectionRefs();

    const {  windowScrollHeight,setWindowScrollHeight } = scroll();

    const { scrollY, } = useScroll({target:ctnRef, offset: ['start end', 'start end']});

    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };
    
    

    useEffect(() => {
        if(windowScrollHeight === 0) {
            setWindowScrollHeight(ctnRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
        }
        {windowScrollHeight && windowScrollHeight}
    }, [windowScrollHeight, setWindowScrollHeight,  ctnRef]);

    useEffect(() => {
        const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.51, // Trigger when 50% of the element is in view
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const id = entry.target.id;
            setCurrentSection(id); // Update currentSection to the current ref's id
            console.log(id);
            
            controls.start(id); // Trigger the animation for the current section
            // snapToTop(entry.target);
            console.log(entry.target.id);
            }
        });
        }, observerOptions);

        refs.forEach(({ ref }) => {
        if (ref.current) {
            observer.observe(ref.current);
        }
        });

        return () => {
            refs.forEach(({ ref }) => {
                if (ref.current) {
                observer.unobserve(ref.current);
                }
            });
        };
    }, [controls, refs]);

    return (
        <AppContainer 
        id='investments-real-estate-page'
        gradientVariants={gradientVariants}
        controls={controls}
        ctnRef={ctnRef}
        >

            
{/* <section className='three-scene' id='' key={'real-estate-page-key'}>

<ScrollableItemCtn elementRef={ctnRef} key={'real-estate-page-key-2'}>
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
</section> */}

            <RealEstatePageHero ctnRef={realEstateMainRef} />
            <RealEstateCriteria ctnRef={realEstateCriteriaRef} />
            <RealEstateAvailable ctnRef={realEstateAvailableRef} />
            <RealEstateCTA ctnRef={realEstateCTARef} />
            <RealEstatePosts ctnRef={realEstatePostsRef} />
        </AppContainer>
    )
}

export default Page
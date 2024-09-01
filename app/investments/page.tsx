"use client"

import React, { useEffect, useRef, useState } from 'react'
import { InvestmentApproach, InvestmentAreas, InvestmentPageHero } from '../components/investment-page'
import { AppContainer, PageWrapper } from '../components'
import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion'
import InvestmentWorldScene from './_components/scenes/InvestmentWorldScene'
import styles from './investments.module.css'
import { Button } from '@mui/material'


const gradientVariants = {
    'investments-main': {
        background: `linear-gradient(to right, #000, #232526, #414345)`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
        animation: 'animate-main-bg 10s infinite alternate',
    },
    'investments-approach': {
        background: 'linear-gradient(to right, #0ba360 , #0ba360 , #3cba92)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '600% 600%',
        backgroundPosition: '0% 50%',
        animation: 'animate-approach-bg 8s ease-in-out infinite alternate',
    },
    'investments-area': {
        background: 'linear-gradient(to right, #1f4037, #99f2c8, #99f2c8)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 50%',
        animation: 'animate-area-bg 6s ease-in-out infinite alternate',
    },
};


const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);

    let yProgress:number = 0

    const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

    const { scrollYProgress, scrollY,  } = useScroll({target:ctnRef, offset: ['start end', 'start end']})

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest, (ctnRef?.current?.offsetHeight! - window.innerHeight  ))
        setScrollYPro(ctnRef?.current?.offsetHeight! - window.innerHeight  );
    });
    
    const mainRef = useRef<HTMLDivElement>(null);
    const areasRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);





    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const syncScroll = (sourceDiv: HTMLDivElement, targetDiv: HTMLDivElement) => {
        
        targetDiv.scrollTop = sourceDiv.scrollTop;
    };

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };


    useEffect(() => {
        const refs = [
        { ref: mainRef, id: 'investments-main' },
        { ref: approachRef, id: 'investments-approach' },
        { ref: areasRef, id: 'investments-areas' },
        ];

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
            controls.start(id); // Trigger the animation for the current section
            snapToTop(entry.target);
            // console.log(entry.target.id);
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
    }, [controls]);


    return (
            <AppContainer
            ctnRef={ctnRef}
            gradientVariants={gradientVariants}
            controls={controls}
            id='investments-page'
            >
                
        <div className="three-scene"><InvestmentWorldScene scrollY={scrollY} scrollYProgress={scrollYProgress} ctnHeightValue={scrollYPro} /></div>
                    
                
                <PageWrapper
                ctnRef={mainRef}
                id='investments-main'
                >
                    

                    <div
                    className={` ${styles.topTextCtn}`}
                    >
                        <h1 className={` ${styles.investHeader}`}>
                            Investments
                        </h1>
                        <h6 className={`${styles.investSubheader}`}>
                            It&apos;s  more than money. It&apos;s Life.
                        </h6>
                    </div>


                    <div
                    className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                    >
                        
                        <p className={`${styles.heroBtnCtnTxt}`} >

                            This is sample content pertaining to my overall thoughts surrounding investments.
                        </p>

                        <motion.div
                        className={`${styles.btnCtn}`}
                        id='home-investment-hero'
                        >

                                <Button
                                variant='outlined'
                                className={`learn-more-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/current-listings'}
                                >
                                    Current Listings
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/partnership'}
                                >
                                    Let&apos;s Chat
                                </Button>
                                
                        </motion.div>  
                    </div>
                    


                </PageWrapper>                
                <InvestmentApproach ctnRef={approachRef} />
                <InvestmentAreas ctnRef={areasRef} />
                
            </AppContainer>
    )
}

export default Page
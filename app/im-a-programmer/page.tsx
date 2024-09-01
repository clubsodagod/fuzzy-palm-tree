'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AppContainer } from '../components'
import { DigitalSolutionsMain, RealWorldImpact, WhyDigitalSolutions, HomeVisuals, Overview, OverviewDynamic, WhyDigitalSolutionsDynamic } from './_components';
import OverViewTwo from './_components/OverviewDynamic';
import { Chapter, importantFactors, overview, Point } from '@/library/const';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';


const gradientVariants = {
    'programmer-main': {
        background: `linear-gradient(to right, #000, #232526, #414345)`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
        animation: 'animate-main-bg 10s infinite alternate',
    },
    'programmer-overview': {
        background: 'linear-gradient(to bottom, #0ba360 , #0ba360 , #3cba92)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 50%',
        animation: 'animate-approach-bg 8s ease-in-out infinite alternate',
    },
    'programmer-overview-alt': {
        background: 'linear-gradient(to right, #1f4037, #99f2c8, #99f2c8)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 50%',
        animation: 'animate-area-bg 6s ease-in-out infinite alternate',
    },
    'programmer-why-digital': {
        background: 'linear-gradient(to right, #1f4037, #99f2c8, #99f2c8)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 50%',
        animation: 'animate-approach-bg 8s ease-in-out infinite alternate',
    },
    'programmer-why-digital-alt': {
        background: 'linear-gradient(to right, #1f4037, #99f2c8, #99f2c8)',
        backgroundBlendMode:   `multiply`,
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 50%',
        animation: 'animate-area-bg 6s ease-in-out infinite alternate',
    },
};

const ImAProgrammerPage = () => {

    let yProgress:number = 0
    const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

    let scrollRef = useRef<HTMLDivElement>(null);
    let bodyRef = useRef<HTMLBodyElement>(null);

    const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    });
    
    const mainRef = useRef<HTMLDivElement>(null);
    const overviewRef = useRef<HTMLDivElement>(null);
    const overviewAltRef = useRef<HTMLDivElement>(null);
    const whyDigitalAltRef = useRef<HTMLDivElement>(null);
    const whyDigitalRef = useRef<HTMLDivElement>(null);





    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

   
    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };


    useEffect(() => {
        const refs = [
            { ref: mainRef, id: 'programmer-main' },
            { ref: overviewRef, id: 'programmer-overview' },
            { ref: whyDigitalRef, id: 'programmer-why-digital' },
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
            console.log(entry.target.id);
            }
            

        });
        }, observerOptions);

        refs.forEach(({ ref }) => {
        if (ref.current) {
            observer.observe(ref.current);
            
        }
        });

        {
            refs.forEach((ref)=> {
                if(ref){
                    console.log(ref.ref.current)
                }
            })
        }

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
        ctnRef={scrollRef}
        bodyRef={bodyRef}
        gradientVariants={gradientVariants}
        controls={controls}
        >
            <DigitalSolutionsMain ctnRef={mainRef} />
            <Overview ctnRef={overviewRef}/>
            {
                overview.map((c:Chapter, i:number)=> {
                    if (i%2 === 0) {
                        return <OverviewDynamic chapter={c} key={`chapter: ${i+1}`}  id='programmer-overview-alt' index={i}/>
                    } else {
                        return <OverviewDynamic chapter={c} key={`chapter: ${i+1}`}  id='programmer-overview' index={i}/>
                    }
                    
                })
            }
            <WhyDigitalSolutions ctnRef={whyDigitalRef}/>
            {
                importantFactors.map((f:Point, i:number)=> {
                    if (i%2 === 0) {
                        return <WhyDigitalSolutionsDynamic index={i} factor={f}  key={`factoralt: ${i}`}/>
                    } else {
                        return <WhyDigitalSolutionsDynamic index={i} factor={f}  key={`factor: ${i}`}/>
                    }
                    
                })
            }
            {/* <RealWorldImpact />
            <HomeVisuals /> */}
        </AppContainer>
    )
}

export default ImAProgrammerPage
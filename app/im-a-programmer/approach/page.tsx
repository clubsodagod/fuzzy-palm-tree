'use client'


import { AppContainer } from '@/app/components';
import React, { useEffect, useRef, useState } from 'react'
import { AgileDevelopment, AgileDevelopmentDynamic, ApproachHero, DesignThinking, DesignThinkingDynamic, ProcessWorkflow, TechnologyStack, WorkflowDynamic } from '../_components/approach';
import { agileDevelopment, designThinking, Point, workflow } from '@/library/const';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { programmerGradientVariants } from '@/library/const/animation-gradients';

const ApproachPage = () => {

    const {
        scrollRef, bodyRef,  approachRefs:refs, 
        approachMainRef, approachAgileDevRef, approachAgileDevDynamicRefs,
        designThinkingRef, designThinkingDynamicRefs, technologyStackRef,
        processFlowRef, processFlowDynamicRefs,
    } = useProgrammerPageSectionRefs();

    const [scrollYPro, setScrollYPro] = React.useState<number>(0)
    const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    });

    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };

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
    }, [controls, refs]);




    return (
        <AppContainer
        ctnRef={scrollRef}
        bodyRef={bodyRef}
        gradientVariants={programmerGradientVariants}
        controls={controls}
        >
            <ApproachHero ctnRef={approachMainRef} />
            <AgileDevelopment ctnRef={approachAgileDevRef} />
            {
                agileDevelopment.map((f:Point,i:number)=> { 
                    const currentRef = approachAgileDevDynamicRefs[i];
                    if (i%2 === 0) {
                        return (
                            <AgileDevelopmentDynamic key={`importFactor: ${i}`} left='right' factor={f} ctnRef={currentRef} index={i} />
                        )                        
                    } else {
                        return (
                            <AgileDevelopmentDynamic key={`importFactor: ${i}`} left='left' factor={f} ctnRef={currentRef} index={i} />
                        )
                    }
                })
            }
            <DesignThinking ctnRef={designThinkingRef} />
            {
                designThinking.map((f:Point,i:number)=> { 
                    const currentRef = designThinkingDynamicRefs[i];
                    if (i%2 === 0) {
                        return (
                            <DesignThinkingDynamic key={`importFactor: ${i}`} left='right' factor={f}ctnRef={currentRef} index={i} />
                        )                        
                    } else {
                        return (
                            <DesignThinkingDynamic key={`importFactor: ${i}`} left='left' factor={f} ctnRef={currentRef} index={i} />
                        )
                    }

                })
            }
            <TechnologyStack ctnRef={technologyStackRef} />
            <ProcessWorkflow ctnRef={processFlowRef} />
            {
                workflow.map((f:Point,i:number)=> { 
                    const currentRef = processFlowDynamicRefs[i];
                    if (i%2 === 0) {
                        return (
                            <WorkflowDynamic key={`importFactor: ${i}`} left='right' factor={f} ctnRef={currentRef}  index={i} />
                        )                        
                    } else {
                        return (
                            <WorkflowDynamic key={`importFactor: ${i}`} left='left' factor={f} ctnRef={currentRef}  index={i} />
                        )
                    }
                })
            }
        </AppContainer>
    )
}

export default ApproachPage
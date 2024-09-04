'use client'


import { AppContainer } from '@/app/components';
import React, { createRef, useEffect, useRef, useState } from 'react'
import { DigitalSolutionsMain } from '../_components';
import { CustomSoftware, CustomSoftwareDynamic, DataScienceAI, DataScienceAIDynamic, DigitalTransformation, DigitalTransformationDynamic, Visuals, WebMobileApplications, WebMobileApplicationsDynamic } from '../_components/digital-solutions';
import { programmerGradientVariants } from '@/library/const/animation-gradients';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { customSoftware, dataScienceAI, digitalTransformation, ExtendedPointUseCase, Point, webMobileApp } from '@/library/const';

const DigitalSolutionsPage = () => {
    const {
        scrollRef, bodyRef, digitalSolutionsRefs: refs,
        digitalSolutionsRef, customSoftwareRef, customSoftwareDynamicRefs,
        dataScienceAIRef, dataScienceAIDynamicRefs,
        webMobileAppRef, webMobileAppDynamicRefs, digitalTransformationRef,
        digitalSolutionsVisualsRef,
        digitalTransformationDynamicRefs
    } = useProgrammerPageSectionRefs();
    
    const [scrollYPro, setScrollYPro] = useState<number>(0);
    const { scrollYProgress, scrollY } = useScroll({ target: scrollRef, offset: ['start end', 'end start'] });
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0));
    });

    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior: "smooth", block: 'start' });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.51
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setCurrentSection(id);
                    controls.start(id);
                    snapToTop(entry.target);
                    console.log(id);
                    
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
            ctnRef={scrollRef}
            bodyRef={bodyRef}
            gradientVariants={programmerGradientVariants}
            controls={controls}
        >
            <DigitalSolutionsMain ctnRef={digitalSolutionsRef} />
            <CustomSoftware ctnRef={customSoftwareRef} />
            {customSoftware.map((f: ExtendedPointUseCase, i: number) => {
                
                const currentRef = customSoftwareDynamicRefs[i];
                // console.log(currentRef);
                
                return (
                    <CustomSoftwareDynamic
                        key={`customSoftware: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                    />
                );
            })}
            <DataScienceAI ctnRef={dataScienceAIRef} />
            {dataScienceAI.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = dataScienceAIDynamicRefs[i];
                return (
                    <DataScienceAIDynamic
                        key={`dataScienceAI: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                    />
                );
            })}
            <WebMobileApplications ctnRef={webMobileAppRef} />
            {webMobileApp.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = webMobileAppDynamicRefs[i];
                return (
                    <WebMobileApplicationsDynamic
                        key={`webMobileApp: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                    />
                );
            })}
            <DigitalTransformation ctnRef={digitalTransformationRef} />
            {digitalTransformation.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = digitalTransformationDynamicRefs[i];
                return (
                    <DigitalTransformationDynamic
                        key={`digitalTransformation: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                    />
                );
            })}
            {/* <Visuals ctnRef={digitalSolutionsVisualsRef} /> */}
        </AppContainer>
    );
};

export default DigitalSolutionsPage;
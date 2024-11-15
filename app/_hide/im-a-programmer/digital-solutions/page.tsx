'use client'


import { AppContainer } from '@/app/_hide/_components';
import React, { createRef, useEffect, useRef, useState } from 'react'
import { DigitalSolutionsMain } from '../_components';
import { CustomSoftware, CustomSoftwareDynamic, DataScienceAI, DataScienceAIDynamic, DigitalTransformation, DigitalTransformationDynamic, Visuals, WebMobileApplications, WebMobileApplicationsDynamic } from '../_components/_digital-solutions';
import { programmerGradientVariants } from '@/library/const/animation-gradients';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { customSoftware, dataScienceAI, digitalTransformation, ExtendedPointUseCase, Point, webMobileApp } from '@/library/const';
import { useRouter } from 'next/navigation';

const DigitalSolutionsPage = () => {

    const router = useRouter();

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
                    // snapToTop(entry.target);
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


    function scrollToSection(id: string,) {
        // Find the index of the current section in the refs array
        const currentIndex = refs.findIndex(section => section.id === currentSection);

        // Helper function to scroll to a section by index
        function scrollToIndex(index: number) {
            refs[index]?.ref.current?.scrollIntoView({
                block: "start",
                behavior: "smooth", // Adding smooth scrolling for a better experience
            });
        }

        switch (id) {
            case "digital-solutions-main":
                scrollToIndex(0);
                break;
            case "custom-software":
                scrollToIndex(1);
                break;
            case "data-science-ai":
                scrollToIndex(5);
                break;
            case "web-mobile-application":
                scrollToIndex(9);
                break;
            case "digital-transformation":
                scrollToIndex(13);
                break;

            case "next":
                if (currentIndex >= 0 && currentIndex < refs.length - 1) {
                    // Go to the next section if there is one
                    scrollToIndex(currentIndex + 1);
                }
                break;

            case "previous":
                if (currentIndex > 0) {
                    // Go to the previous section if there is one
                    scrollToIndex(currentIndex - 1);
                }
                break;

            case "top":
                scrollToIndex(0);
                break;

            default:
                break;
        }
    }


    function goToPage(event: MouseEvent, id: string) {
        event.preventDefault();
        router.push(id);
    }


    return (
        <AppContainer
            ctnRef={scrollRef}
            bodyRef={bodyRef}
            gradientVariants={programmerGradientVariants}
            controls={controls}
        >
            <DigitalSolutionsMain
                ctnRef={digitalSolutionsRef}
                scrollTo={scrollToSection}
                goToPage={goToPage}
            />

            <CustomSoftware
                ctnRef={customSoftwareRef}
                scrollTo={scrollToSection}
                goToPage={goToPage}
            />

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
                        scrollTo={scrollToSection}
                        goToPage={goToPage}
                    />
                );
            })}


            <DataScienceAI
                ctnRef={dataScienceAIRef}
                scrollTo={scrollToSection}
                goToPage={goToPage}
            />

            {dataScienceAI.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = dataScienceAIDynamicRefs[i];
                return (
                    <DataScienceAIDynamic
                        key={`dataScienceAI: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSection}
                        goToPage={goToPage}
                    />
                );
            })}


            <WebMobileApplications
                ctnRef={webMobileAppRef}
                scrollTo={scrollToSection}
                goToPage={goToPage}
            />


            {webMobileApp.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = webMobileAppDynamicRefs[i];
                return (
                    <WebMobileApplicationsDynamic
                        key={`webMobileApp: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSection}
                        goToPage={goToPage}
                    />
                );
            })}


            <DigitalTransformation
                ctnRef={digitalTransformationRef}
                scrollTo={scrollToSection}
                goToPage={goToPage}
            />

            {digitalTransformation.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = digitalTransformationDynamicRefs[i];
                return (
                    <DigitalTransformationDynamic
                        key={`digitalTransformation: ${i}`}
                        left={i % 2 === 0 ? 'right' : 'left'}
                        factor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSection}
                        goToPage={goToPage}
                    />
                );
            })}
            {/* <Visuals ctnRef={digitalSolutionsVisualsRef} /> */}
        </AppContainer>
    );
};

export default DigitalSolutionsPage;
'use client'
import React from 'react'
import { useProgrammerPageSectionRefs } from '../../_utility/refs';
import { useAppContext } from '@/app/_context/AppContext';
import { scrollToSection } from '@/app/_utility/scroll/scroll-to-section';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import { customSoftware, dataScienceAI, digitalTransformation, ExtendedPointUseCase, webMobileApp } from '@/library/const';
import { CustomSoftware, CustomSoftwareDynamic, DataScienceAI, DataScienceAIDynamic, WebMobileApplications, WebMobileApplicationsDynamic, DigitalTransformation, DigitalTransformationDynamic } from '../../_components/digital-solutions';
import DigitalSolutionsHeroMain from '../../_components/digital-solutions/DigitalSolutionsHeroMain';
import DigitalSolutionsScene from '../../_components/digital-solutions/three/DigitalSolutionsScene';

const DigitalSolutionsModule = () => {
    const {
        appContainer: {
            currentSection
        }
    } = useAppContext();

    const {
        scrollRef, bodyRef, digitalSolutionsRefs: refs,
        digitalSolutionsRef, customSoftwareRef, customSoftwareDynamicRefs,
        dataScienceAIRef, dataScienceAIDynamicRefs,
        webMobileAppRef, webMobileAppDynamicRefs, digitalTransformationRef,
        digitalSolutionsVisualsRef,
        digitalTransformationDynamicRefs
    } = useProgrammerPageSectionRefs();

    function scrollToSectionHandler(id: string) {
        console.log(id);

        scrollToSection(id, refs, currentSection);
    };

    WindowUpdater(scrollRef);

    IntersectionWatcher({ refs });

    function goToPage() {

    }

    return (
        <>
        <DigitalSolutionsScene />
            <DigitalSolutionsHeroMain
                ctnRef={digitalSolutionsRef}
                scrollTo={scrollToSectionHandler}
                id=''
            />

            <CustomSoftware
                ctnRef={customSoftwareRef}
                scrollTo={scrollToSectionHandler}
                id=''
            />

            {customSoftware.map((f: ExtendedPointUseCase, i: number) => {

                const currentRef = customSoftwareDynamicRefs[i];
                console.log(f);

                return (
                    <CustomSoftwareDynamic
                        key={`customSoftware: ${i}`}
                        left={i % 2 === 0 ? false : true}
                        exFactor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSectionHandler}
                        id={''}
                    />
                );
            })}


            <DataScienceAI
                ctnRef={dataScienceAIRef}
                scrollTo={scrollToSectionHandler}
                id=''
            />

            {dataScienceAI.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = dataScienceAIDynamicRefs[i];
                return (
                    <DataScienceAIDynamic
                        key={`dataScienceAI: ${i}`}
                        left={i % 2 === 0 ? false : true}
                        exFactor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSectionHandler}
                        id=''
                    />
                );
            })}


            <WebMobileApplications
                ctnRef={webMobileAppRef}
                scrollTo={scrollToSectionHandler}
                id=''
            />


            {webMobileApp.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = webMobileAppDynamicRefs[i];
                return (
                    <WebMobileApplicationsDynamic
                        key={`webMobileApp: ${i}`}
                        left={i % 2 === 0 ? false : true}
                        exFactor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSectionHandler}
                        id=''
                    />
                );
            })}


            <DigitalTransformation
                ctnRef={digitalTransformationRef}
                scrollTo={scrollToSectionHandler}
                id=''
            />

            {digitalTransformation.map((f: ExtendedPointUseCase, i: number) => {
                const currentRef = digitalTransformationDynamicRefs[i];
                return (
                    <DigitalTransformationDynamic
                        key={`digitalTransformation: ${i}`}
                        left={i % 2 === 0 ? false : true}
                        exFactor={f}
                        ctnRef={currentRef}
                        index={i}
                        scrollTo={scrollToSectionHandler}
                        id=''
                    />
                );
            })}

        </>
    )
}

export default DigitalSolutionsModule
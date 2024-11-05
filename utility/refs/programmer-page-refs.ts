import { useRef, useEffect, RefObject, createRef } from "react";
import React from "react";
import { createDynamicRefs } from "../functions";
import { agileDevelopment, customSoftware, designThinking, digitalTransformation, importantFactors, overview } from "@/library/const";

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
};

// Custom hook to create and manage refs
export const useProgrammerPageSectionRefs = (): {
    scrollRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    mainRef: RefObject<HTMLDivElement>;
    areasRef: RefObject<HTMLDivElement>;
    overviewRef: RefObject<HTMLDivElement>;
    overviewDynamicRefs: RefObject<HTMLDivElement>[];
    whyDigitalRef: RefObject<HTMLDivElement>;
    whyDigitalDynamicRefs: RefObject<HTMLDivElement>[];
    refs: RefIDObject[];
    approachMainRef: RefObject<HTMLDivElement>;
    approachSolidRef: RefObject<HTMLDivElement>;
    designPatternsRef: RefObject<HTMLDivElement>;
    continuousLearningRef: RefObject<HTMLDivElement>;
    sdlcRef: RefObject<HTMLDivElement>;
    approachAgileDevDynamicRefs: RefObject<HTMLDivElement>[];
    designThinkingDynamicRefs: RefObject<HTMLDivElement>[];
    processFlowDynamicRefs: RefObject<HTMLDivElement>[];
    approachRefs: RefIDObject[];
    ctaConsultationRef: RefObject<HTMLDivElement>;
    contactInfoRef: RefObject<HTMLDivElement>;
    locationInfoRef: RefObject<HTMLDivElement>;
    ctaRefs: RefIDObject[];
    digitalSolutionsRef: RefObject<HTMLDivElement>;
    customSoftwareRef: RefObject<HTMLDivElement>;
    dataScienceAIRef: RefObject<HTMLDivElement>;
    webMobileAppRef: RefObject<HTMLDivElement>;
    digitalTransformationRef: RefObject<HTMLDivElement>;
    digitalTransformationDynamicRefs: RefObject<HTMLDivElement>[];
    customSoftwareDynamicRefs: RefObject<HTMLDivElement>[];
    dataScienceAIDynamicRefs: RefObject<HTMLDivElement>[];
    webMobileAppDynamicRefs: RefObject<HTMLDivElement>[];
    digitalSolutionsVisualsRef: RefObject<HTMLDivElement>;
    digitalSolutionsRefs: RefIDObject[];
} => {
    // Static Refs

    // /im-a-programmer refs static
    const scrollRef = useRef<HTMLDivElement>(null);
    const areasRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLBodyElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const overviewRef = useRef<HTMLDivElement>(null);
    const whyDigitalRef = useRef<HTMLDivElement>(null);
    //  /im-a-programmer dynamic ref initialization
    const overviewDynamicRefs = useRef(overview.map(() => createRef<HTMLDivElement>())).current;
    const whyDigitalDynamicRefs = useRef(importantFactors.map(() => createRef<HTMLDivElement>())).current;

    // Approach Section Refs
    const approachMainRef = useRef<HTMLDivElement>(null);
    const approachSolidRef = useRef<HTMLDivElement>(null);
    const designPatternsRef = useRef<HTMLDivElement>(null);
    const continuousLearningRef = useRef<HTMLDivElement>(null);
    const sdlcRef = useRef<HTMLDivElement>(null);

    // Dynamic Refs Initialization
    const approachAgileDevDynamicRefs = useRef(agileDevelopment.map(() => createRef<HTMLDivElement>())).current;
    const designThinkingDynamicRefs = useRef(designThinking.map(() => createRef<HTMLDivElement>())).current;
    const processFlowDynamicRefs = useRef(agileDevelopment.map(() => createRef<HTMLDivElement>())).current;

    // Let's Work Section Refs
    const ctaConsultationRef = useRef<HTMLDivElement>(null);
    const contactInfoRef = useRef<HTMLDivElement>(null);
    const locationInfoRef = useRef<HTMLDivElement>(null);

    // Digital Solutions Section Refs
    const digitalSolutionsRef = useRef<HTMLDivElement>(null);
    const customSoftwareRef = useRef<HTMLDivElement>(null);
    const dataScienceAIRef = useRef<HTMLDivElement>(null);
    const webMobileAppRef = useRef<HTMLDivElement>(null);
    const digitalTransformationRef = useRef<HTMLDivElement>(null);
    const digitalSolutionsVisualsRef = useRef<HTMLDivElement>(null);

    const digitalTransformationDynamicRefs = useRef(customSoftware.map(() => createRef<HTMLDivElement>())).current;
    const customSoftwareDynamicRefs = useRef(customSoftware.map(() => createRef<HTMLDivElement>())).current;
    const dataScienceAIDynamicRefs = useRef(customSoftware.map(() => createRef<HTMLDivElement>())).current;
    const webMobileAppDynamicRefs =  useRef(customSoftware.map(() => createRef<HTMLDivElement>())).current;

    


    const approachRefs = [
        { ref: approachMainRef, id: 'approach-main' },
        { ref: approachSolidRef, id: 'approach-solid-principles' },
        { ref: designPatternsRef, id: 'approach-design-patterns' },
        { ref: sdlcRef, id: 'approach-sdlc' },
    ];


    const ctaRefs = [
        { ref: ctaConsultationRef, id: 'lets-work-consultation' },
        { ref: contactInfoRef, id: 'lets-work-contact-information' },
        { ref: locationInfoRef, id: 'lets-work-location-information' },
    ];

    const digitalSolutionsRefs = [
        { ref: digitalSolutionsRef, id: 'digital-solutions-main' },
        { ref: customSoftwareRef, id: 'custom-software' },
        ...createDynamicRefs([{ refs: customSoftwareDynamicRefs, idTemplate: `custom-software-dynamic` }]),
        { ref: dataScienceAIRef, id: 'data-science-ai' },
        ...createDynamicRefs([{ refs: dataScienceAIDynamicRefs, idTemplate: `data-science-ai-dynamic` }]),
        { ref: webMobileAppRef, id: 'web-mobile-application' },
        ...createDynamicRefs([{ refs: webMobileAppDynamicRefs, idTemplate: `web-mobile-application-dynamic` }]),
        { ref: digitalTransformationRef, id: 'digital-transformation' },
        ...createDynamicRefs([{ refs: digitalTransformationDynamicRefs, idTemplate: `digital-transformation-dynamic` }]),
    ];


    const refs = [
        { ref: mainRef, id: 'programmer-main' },
        { ref: overviewRef, id: 'programmer-overview' },
        ...createDynamicRefs([{ refs: overviewDynamicRefs, idTemplate: `programmer-overview-dynamic` }]),
        { ref: whyDigitalRef, id: 'programmer-why-digital' },
        ...createDynamicRefs([{ refs: whyDigitalDynamicRefs, idTemplate: `programmer-why-digital-dynamic` }]),
    ];

    return {
        scrollRef,
        bodyRef,
        mainRef,
        areasRef,
        overviewRef,
        overviewDynamicRefs,
        whyDigitalRef,
        whyDigitalDynamicRefs,
        refs,
        approachRefs,
        approachMainRef,
        continuousLearningRef,
        approachAgileDevDynamicRefs,
        designPatternsRef,
        designThinkingDynamicRefs,
        approachSolidRef,
        sdlcRef,
        processFlowDynamicRefs,
        ctaConsultationRef,
        contactInfoRef,
        locationInfoRef,
        ctaRefs,
        digitalSolutionsRef,
        customSoftwareRef,
        customSoftwareDynamicRefs:customSoftwareDynamicRefs,
        dataScienceAIRef,
        dataScienceAIDynamicRefs,
        webMobileAppRef,
        webMobileAppDynamicRefs,
        digitalTransformationRef,
        digitalTransformationDynamicRefs,
        digitalSolutionsVisualsRef,
        digitalSolutionsRefs,
    };
};

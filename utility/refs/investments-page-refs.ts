import { useRef, RefObject } from "react";
import * as THREE from 'three'


export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}

// Custom hook to create and manage refs
export const useInvestmentsPageSectionRefs = (): {
    mainRef: RefObject<HTMLDivElement>;
    approachRef: RefObject<HTMLDivElement>;
    areasRef: RefObject<HTMLDivElement>;
    ctnRef: RefObject<HTMLDivElement>;
    approachCtnRef: RefObject<HTMLDivElement>;
    realEstateCtnRef: RefObject<HTMLDivElement>;
    approachMainRef: RefObject<HTMLDivElement>;
    coreInvestmentRef: RefObject<HTMLDivElement>;
    marketPrinciplesRef: RefObject<HTMLDivElement>;
    riskManagementRef: RefObject<HTMLDivElement>;
    visionPrinciplesRef: RefObject<HTMLDivElement>;
    realEstateMainRef: RefObject<HTMLDivElement>;
    realEstateCriteriaRef: RefObject<HTMLDivElement>;
    realEstateAvailableRef: RefObject<HTMLDivElement>;
    realEstateCTARef: RefObject<HTMLDivElement>;
    realEstatePostsRef: RefObject<HTMLDivElement>;
    refs: RefIDObject[];
    approachRefs: RefIDObject[];
    realEstateRefs: RefIDObject[];
} => {


    // rp: /investments
    const mainRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);
    const areasRef = useRef<HTMLDivElement>(null);
    const ctnRef = useRef<HTMLDivElement>(null);
    const refs = [
        { ref: mainRef, id: 'investments-main' },
        { ref: approachRef, id: 'investments-approach' },
        { ref: areasRef, id: 'investments-areas' },
    ];


    // rp: /investments/real-estate/approach

    const approachMainRef = useRef<HTMLDivElement>(null);
    const coreInvestmentRef = useRef<HTMLDivElement>(null);
    const marketPrinciplesRef = useRef<HTMLDivElement>(null);
    const riskManagementRef = useRef<HTMLDivElement>(null);
    const visionPrinciplesRef = useRef<HTMLDivElement>(null);
    const approachCtnRef = useRef<HTMLDivElement>(null);
    const approachRefs = [
        { ref: approachMainRef, id: 'approach-main' },
        { ref: coreInvestmentRef, id: 'approach-core-investments-principles' },
        { ref: marketPrinciplesRef, id: 'approach-market-principles' },
        { ref: riskManagementRef, id: 'approach-risk-management-principles' },
        { ref: visionPrinciplesRef, id: 'approach-vision-principles' },
    ];

    // rp: /investments/real-estate

    const realEstateMainRef = useRef<HTMLDivElement>(null);
    const realEstateCriteriaRef = useRef<HTMLDivElement>(null);
    const realEstateAvailableRef = useRef<HTMLDivElement>(null);
    const realEstateCTARef = useRef<HTMLDivElement>(null);
    const realEstatePostsRef = useRef<HTMLDivElement>(null);
    const realEstateCtnRef = useRef<HTMLDivElement>(null);
    const realEstateRefs = [
        { ref: realEstateMainRef, id: 'real-estate-main' },
        { ref: realEstateCriteriaRef, id: 'real-estate-criteria' },
        { ref: realEstateAvailableRef, id: 'real-estate-available' },
        { ref: realEstateCTARef, id: 'real-estate-cta' },
        { ref: realEstatePostsRef, id: 'real-estate-posts' },
    ];


    return {
        mainRef,
        approachRef,
        areasRef,
        ctnRef,
        refs,
        coreInvestmentRef,
        approachMainRef,
        marketPrinciplesRef,
        riskManagementRef,
        visionPrinciplesRef,
        approachRefs,
        approachCtnRef,
        realEstateMainRef,
        realEstateCriteriaRef,
        realEstateAvailableRef,
        realEstateCTARef,
        realEstatePostsRef,
        realEstateRefs,
        realEstateCtnRef,
    };
};

import { useRef, RefObject } from "react";
import * as THREE from 'three'

// Define types for the references
type RefArray = RefObject<HTMLDivElement>[];

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}

// Custom hook to create and manage refs
export const usePortfolioRefs = (): {
    ctnRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    mainRef: RefObject<HTMLDivElement>;
    caseStudiesRef: RefObject<HTMLDivElement>;
    refs: RefIDObject[];
} => {
    const ctnRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLBodyElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);

    const refs = [
        { ref: mainRef, id: 'portfolio-main' },
        { ref: caseStudiesRef, id: 'portfolio-case-studies' },
    ];




    return {
        refs, bodyRef, ctnRef,
        mainRef, caseStudiesRef
    };
};

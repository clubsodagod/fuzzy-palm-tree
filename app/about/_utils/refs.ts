import { useRef, RefObject } from "react";
import * as THREE from 'three'

// Define types for the references
type RefArray = RefObject<HTMLDivElement>[];

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}

// Custom hook to create and manage refs
export const useAboutSectionRefs = (): {
    ctnRef: RefObject<HTMLDivElement>;
    bioRef: RefObject<HTMLDivElement>;
    coreValuesRef: RefObject<HTMLDivElement>;
    missionStatementRef: RefObject<HTMLDivElement>;
    resumeMainRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    scrollRef: RefObject<HTMLDivElement>;
    refs: RefIDObject[];
    resumeRefs: RefIDObject[];
} => {
    const ctnRef = useRef<HTMLDivElement>(null);
    const bioRef = useRef<HTMLDivElement>(null);
    const coreValuesRef = useRef<HTMLDivElement>(null);
    const missionStatementRef = useRef<HTMLDivElement>(null);
    const resumeMainRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLBodyElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const refs = [
        { ref: bioRef, id: 'about-bio' },
        { ref: missionStatementRef, id: 'about-mission-statement' },
        { ref: coreValuesRef, id: 'about-core-values' },
    ];
    const resumeRefs = [
        { ref: resumeMainRef, id: 'about-resume-main' },
    ];




    return {
        bioRef, coreValuesRef, missionStatementRef,refs, bodyRef, ctnRef,
        scrollRef, resumeMainRef, resumeRefs
    };
};

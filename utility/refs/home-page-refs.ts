import { useRef, RefObject } from "react";
import * as THREE from 'three'

// Define types for the references
type RefArray = RefObject<HTMLDivElement>[];

export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}

// Custom hook to create and manage refs
export const useSectionRefs = (): {
    mainRef: RefObject<HTMLDivElement>;
    scrollRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    refs: RefIDObject[];
    sceneRef: RefObject<THREE.Group>;
    programmerRef: RefObject<HTMLDivElement>;
    investRef: RefObject<HTMLDivElement>;
    blogRef: RefObject<HTMLDivElement>;
    refArrays: RefArray;
    threeRefs: RefObject<HTMLDivElement>[];
} => {
    const mainRef = useRef<HTMLDivElement>(null);
    const programmerRef = useRef<HTMLDivElement>(null);
    const investRef = useRef<HTMLDivElement>(null);
    const blogRef = useRef<HTMLDivElement>(null);
    const threeRefs = useRef<RefObject<HTMLDivElement>[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<HTMLBodyElement>(null);
    const sceneRef = useRef<THREE.Group>(null);

    const refs = [
        { ref: mainRef, id: 'main' },
        { ref: programmerRef, id: 'programmer' },
        { ref: investRef, id: 'invest' },
        { ref: blogRef, id: 'blog' }
    ];

    const refArrays: RefArray = [mainRef, programmerRef, investRef, blogRef,];

    refArrays.forEach((ref, i) => {
        if (!threeRefs.current[i]) {
            threeRefs.current[i] = ref;
        }
    });

    return {
        mainRef,
        scrollRef,
        bodyRef,
        programmerRef,
        investRef,
        sceneRef,
        blogRef,
        refs,
        refArrays,
        threeRefs: threeRefs.current
    };
};

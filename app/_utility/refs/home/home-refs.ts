import { RefIDObject } from "@/app/_library/types/refs";
import { useRef, RefObject } from "react";

// Custom hook to create and manage refs
export const useHomeRefs = (): {
    mainRef: RefObject<HTMLDivElement>;
    scrollRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLBodyElement>;
    refs: RefIDObject[];
    programmerRef: RefObject<HTMLDivElement>;
    investRef: RefObject<HTMLDivElement>;
    blogRef: RefObject<HTMLDivElement>;
} => {
    const mainRef = useRef<HTMLDivElement>(null);
    const programmerRef = useRef<HTMLDivElement>(null);
    const investRef = useRef<HTMLDivElement>(null);
    const blogRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<HTMLBodyElement>(null);

    const refs = [
        { ref: mainRef, id: 'home-main' },
        { ref: programmerRef, id: 'home-programmer' },
        { ref: blogRef, id: 'home-blog' }
    ];



  

    return {
        mainRef,
        scrollRef,
        bodyRef,
        programmerRef,
        investRef,
        blogRef,
        refs,
    };
};
